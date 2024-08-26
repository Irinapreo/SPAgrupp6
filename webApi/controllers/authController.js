const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const register = (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res
      .status(400)
      .json({ message: "Username and password are required" });
  }

  userModel.findUserByUsername(username, (err, user) => {
    if (err) return res.status(500).json({ message: "Internal Server Error" });
    if (user)
      return res.status(400).json({ message: "Username already exists" });

    userModel.registerUser(username, password, (err) => {
      if (err)
        return res.status(500).json({ message: "Error registering user" });
      res.status(201).json({ message: "User registered successfully!" });
    });
  });
};

const login = (req, res) => {
  const { username, password } = req.body;
  userModel.findUserByUsername(username, (err, user) => {
    if (err) return res.status(500).json({ message: "Internal Server Error" });
    if (!user) return res.status(400).json({ message: "User not found" });

    const isPasswordValid = bcrypt.compareSync(password, user.password);
    if (!isPasswordValid)
      return res.status(401).json({ message: "Invalid credentials" });

    const token = jwt.sign({ username }, "your_jwt_secret", {
      expiresIn: "1h",
    });
    res.json({ token });
  });
};

module.exports = { register, login };
