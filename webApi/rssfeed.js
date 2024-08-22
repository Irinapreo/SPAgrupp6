// rssfeed.js

const RSSParser = require('rss-parser');
const parser = new RSSParser();

// Funktion som hämtar RSS-flöden
async function fetchRSSFeeds() {
    let posts = [];
    const RSS_URLS = [
        'http://www.dn.se/nyheter/m/rss/',
        'https://rss.aftonbladet.se/rss2/small/pages/sections/senastenytt/',
        'https://feeds.expressen.se/nyheter/',
        'http://www.svd.se/?service=rss',
        'http://api.sr.se/api/rss/program/83?format=145',
        'http://www.svt.se/nyheter/rss.xml'
    ];

    for (let url of RSS_URLS) {
        try {
            const feed = await parser.parseURL(url);
            posts = posts.concat(feed.items);
        } catch (error) {
            console.error(`Error fetching RSS feed from ${url}:`, error);
        }
    }
    return posts;
}

module.exports = { fetchRSSFeeds };
