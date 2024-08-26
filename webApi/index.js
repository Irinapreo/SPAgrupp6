const express = require("express");
const cors = require("cors");
const axios = require("axios");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const app = express();
const axios = require("axios");
const port = 3000;
const articleController = require("./controllers/articleController");
const jwtMiddleware = require("./utils/jwtMiddleware");
const authRoutes = require("./routes/authRoutes");
const articleRoutes = require("./routes/articleRoutes");
const oldNewRoutes = require("./routes/oldNewRoutes");
const rssRoutes = require("./routes/rssRoutes");

dotenv.config();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/api/auth", authRoutes);
app.use("/api/articles/oldnew", oldNewRoutes);
app.get("/api/articles", articleController.getArticles);
app.use("/api/rss", rssRoutes);
app.use("/api/articles", articleRoutes);

app.use("/api/protected", jwtMiddleware, (req, res) => {
  res.json({ message: "This is a protected route", user: req.user });
});

app.listen(port, () => {
  console.log(`Backend API running at http://localhost:${port}`);
  try {
    const response = axios.get(
      "http://localhost:3000/api/rss/fetch-and-store-rss"
    );
    console.log("RSS feed fetched and stored:", response.data);
  } catch (error) {
    console.error("Error fetching RSS feed:", error);
  }
});
