const fetchRSSFeeds = require("../utils/rssfeed");
const insertPost = require("../models/articleModel").createArticle;

const fetchAndStoreRSS = async (req, res) => {
  try {
    console.log("Fetching RSS feeds...");
    const posts = await fetchRSSFeeds();
    console.log("RSS feeds fetched:", posts.length, "posts found.");

    for (let post of posts) {
      const publishedDate = new Date(post.pubDate).toISOString().split("T")[0];
      console.log(`Inserting post: ${post.title}`);

      await insertPost(
        post.title,
        post.contentSnippet || post.summary,
        post.link,
        publishedDate,
        post.category || "General"
      );

      console.log(`Post inserted: ${post.title}`);
    }

    res.status(200).json({ message: "RSS feeds stored successfully" });
  } catch (error) {
    console.error("Error fetching/storing RSS feeds:", error);
    res.status(500).json({ error: "Failed to fetch and store RSS feeds" });
  }
};

module.exports = { fetchAndStoreRSS };
