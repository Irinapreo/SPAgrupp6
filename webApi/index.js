const express = require("express");
const mysql = require('mysql2');
const cors = require("cors");
const app = express();
const port = 3000;
const fs = require('fs');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { expressjwt: expressJwt } = require('express-jwt');

app.use(cors());

// const USERS_FILE = '../reactapp/users.json';

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "sys23m",
  database: "newssite"
});


// Helper function to read users from a file
const readUsersFromFile = () => {
  try {
    const usersData = fs.readFileSync(USERS_FILE, 'utf-8');
    return JSON.parse(usersData);
  } catch (error) {
    return [];
  }
};

// Helper function to write users to a file
const writeUsersToFile = (users) => {
  fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
};

// Register Route
app.post('/register', (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required' });
  }

  let users = readUsersFromFile();
  const userExists = users.find(user => user.username === username);

  if (userExists) {
    return res.status(400).json({ message: 'Username already exists' });
  }

  const hashedPassword = bcrypt.hashSync(password, 8);
  users.push({ username, password: hashedPassword });
  writeUsersToFile(users);

  res.status(201).json({ message: 'User registered successfully!' });
});

// Login Route
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  let users = readUsersFromFile();
  const user = users.find(u => u.username === username);
  if (!user) {
    return res.status(400).json({ message: 'User not found' });
  }
  const isPasswordValid = bcrypt.compareSync(password, user.password);
  if (!isPasswordValid) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
  const token = jwt.sign({ username }, 'your_jwt_secret', { expiresIn: '1h' });
  res.json({ token });
});

// Protected Route Example
app.get('/api/protected', expressJwt({ secret: 'your_jwt_secret', algorithms: ['HS256'] }), (req, res) => {
  res.json({ message: 'This is a protected route', user: req.user });
});


// API endpoint to get articles
app.get('/api/articles', (req, res) => {
  const sortBy = req.query.sortBy || 'newest';
  let sortOrder = sortBy === 'newest' ? 'DESC' : 'ASC';
  const query = `SELECT title, summary, link, published, topic FROM articles ORDER BY published ${sortOrder}`;

  db.query(query, (error, results) => {
    if (error) {
      return res.status(500).send('Error fetching articles');
    }
    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`Backend API running at http://localhost:${port}`);
});
