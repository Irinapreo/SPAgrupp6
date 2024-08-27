const express = require("express");
const argon2 = require("argon2");
const router = express.Router();
const authController = require("../controllers/authController");
const authenticateToken = require("../utils/jwtMiddleware");

router.post("/register", authController.register);
console.log("Register route:", authController.register);
router.post("/login", authController.login);
console.log("Login route:", authController.login);
router.get("/protected-route", authenticateToken, (_, res) => {
  res.json({ message: "You have access to this protected route" });
});

module.exports = router;
