const db = require("./db");

exports.getArticles = (req, res) => {
    const order = req.query.order === 'desc' ? 'DESC' : 'ASC';
    
    const query = `SELECT * FROM articles ORDER BY Published ${order}`;
    
    db.query(query, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
};
