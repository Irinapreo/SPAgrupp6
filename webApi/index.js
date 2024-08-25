const express = require("express");
const argon2 = require("argon2");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const app = express();
const port = 3000;
const articleController = require("./controllers/articleController");
const jwtMiddleware = require("./utils/jwtMiddleware");
const authRoutes = require("./routes/authRoutes");
const articleRoutes = require("./routes/articleRoutes");
const rssRoutes = require("./routes/rssRoutes");

dotenv.config();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/api/auth", authRoutes);
app.get("/api/articles", articleController.getArticles);
app.use("/api/rss", rssRoutes);
app.use("/api/articles", articleRoutes);

app.use("/api/protected", jwtMiddleware, (req, res) => {
  res.json({ message: "This is a protected route", user: req.user });
});

app.listen(port, () => {
  console.log(`Backend API running at http://localhost:${port}`);
});
