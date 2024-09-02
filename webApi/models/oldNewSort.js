const db = require("./db").promise;

exports.getArticles = async (req, res) => {
  try {
    const order = req.query.order === "desc" ? "DESC" : "ASC";
    const query = `SELECT * FROM articles ORDER BY Published ${order}`;
    const [results] = await db.query(query); // Använd async/await här
    res.json(results); // Returnera resultaten som JSON
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
