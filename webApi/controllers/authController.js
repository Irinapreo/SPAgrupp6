const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const register = (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res
      .status(400)
      .json({ message: "Username and password are required" });
  }

  // Kolla om användaren redan finns
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

const login = async (req, res) => {
  const { username, password } = req.body;
  console.log("Username:", username); // Log for debugging
  console.log("Password:", password); // Log for debugging

  userModel.findUserByUsername(username, async (err, user) => {
    if (err) return res.status(500).json({ message: "Internal Server Error" });
    if (!user) return res.status(400).json({ message: "User not found" });

    console.log("User found:", user);
    console.log("Retrieved hash:", user.password);

    // Directly compare plain-text passwords
    if (password === user.password) {
      // Generate JWT if password is valid
      const token = jwt.sign(
        { username: user.username },
        process.env.JWT_SECRET,
        {
          expiresIn: "1h",
        }
      );

      res.json({ token });
    } else {
      console.log("Invalid password"); // Log if the password is incorrect
      res.status(401).json({ message: "Invalid credentials" });
    }
  });
};

module.exports = { register, login };
