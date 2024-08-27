const fetchRSSFeeds = require("../utils/rssfeed");
const insertPost = require("../models/articleModel").createArticle;

// Mapping of words to categories
const categoryMapping = {
  "halsa": "Hälsa",
  "samhallekonflikter": "Samhälle och Konflikter",
  "miljo": "Miljö",
  "vetenskapteknik": "Vetenskap och Teknik",
  "livsstillfritt": "Livsstil och Fritid",
  "ekonomi": "Ekonomi",
  "religion": "Religion",
  "sport": "Sport",
  "varlden": "Världen",
  "ledare": "Ledare",
  "kultur": "Kultur",

};

const fetchAndStoreRSS = async (req, res) => {
  try {
    console.log("Fetching RSS feeds...");
    const posts = await fetchRSSFeeds();
    console.log("RSS feeds fetched:", posts.length, "posts found.");

    for (let post of posts) {
      // Filter out posts without necessary fields
      if (!post.title || !post.link || !post.pubDate) {
        console.log(`Skipping post due to missing fields: ${post.title || "Unknown title"}`);
        continue;
      }

      const publishedDate = new Date(post.pubDate).toISOString().split("T")[0];
      let category = "General";

      // Split the URL by '/' and check each part
      const urlSegments = post.link.toLowerCase().split('/'); // Convert URL to lowercase
      for (const segment of urlSegments) {
        if (categoryMapping[segment]) {
          category = categoryMapping[segment];
          break;
        }
      }

      // Insert the post into the database
      await insertPost(
        post.title,
        post.contentSnippet || post.summary,
        post.link,
        publishedDate,
        category
      );

      console.log(`Post inserted: ${post.title}, Category: ${category}`);
    }

    res.status(200).json({ message: "RSS feeds stored successfully" });
  } catch (error) {
    console.error("Error fetching/storing RSS feeds:", error);
    res.status(500).json({ error: "Failed to fetch and store RSS feeds" });
  }
};

module.exports = { fetchAndStoreRSS };
