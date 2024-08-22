const express = require("express");
const mysql = require('mysql2');
const cors = require("cors");
const app = express();
const port = 3000;
const fs = require('fs');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { expressjwt: expressJwt } = require('express-jwt');
const bodyParser = require('body-parser');
const { fetchRSSFeeds } = require('./rssfeed');

app.use(cors());

// const USERS_FILE = '../reactapp/users.json';
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "sys23m",
  database: "newssite"
});

db.connect(err => {
  if (err) {
    console.error('Error connecting to the database:', err.stack);
    return;
  }
  console.log('Connected to the database');
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

app.get('/create-table', (req, res) => {
  const query = `CREATE TABLE IF NOT EXISTS articles(
        Title varchar(255) NOT NULL,
        Summary text,
        Link varchar(255) DEFAULT NULL,
        Published date DEFAULT NULL,
        Topic varchar(100)DEFAULT NULL
    )`;

  db.query(query, (err, result) => {
    if (err) throw err;
    res.send('Tabellen customer har skapats eller existerar redan.');
  });
});

// Lägg till en ny kund
app.post('/add-article', (req, res) => {
  const { Title, Summary, Link, Published, Topic } = req.body;
  const query = `INSERT INTO articles (Title, Summary, Link, Published, Topic) VALUES (?, ?)`;

  db.query(query, [name, username], (err, result) => {
    if (err) throw err;
    res.send('Ny kund har lagts till.');
  });
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


app.get('/fetch-and-store-rss', async (req, res) => {
  try {
    console.log("Fetching RSS feeds...");
    const posts = await fetchRSSFeeds(); // Hämta RSS-flöden

    console.log("RSS feeds fetched:", posts.length, "posts found.");

    for (let post of posts) {
      const publishedDate = new Date(post.pubDate).toISOString().split('T')[0]; // Konvertera till YYYY-MM-DD
      console.log(`Inserting post: ${post.title}`);

      await insertPost(post.title, post.contentSnippet || post.summary, post.link, publishedDate, post.category || 'General');

      console.log(`Post inserted: ${post.title}`);
    }

    res.status(200).json({ message: 'RSS feeds stored successfully' });
  } catch (error) {
    console.error('Error fetching/storing RSS feeds:', error);  // Logga hela felet
    res.status(500).json({ error: 'Failed to fetch and store RSS feeds' });
  }
});


async function insertPost(title, summary, link, published, topic) {
  const sql = `
        INSERT INTO articles (Title, Summary, Link, Published, Topic)
        VALUES (?, ?, ?, ?, ?);
    `;

  return new Promise((resolve, reject) => {
    db.query(sql, [title, summary, link, published, topic], (err, result) => {
      if (err) return reject(err);
      resolve(result);
    });
  });
}

