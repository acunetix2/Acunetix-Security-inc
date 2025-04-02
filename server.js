const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Database connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', 
    password: 'Iddy@2005/2024', 
    database: 'acunetixDB'
});

db.connect(err => 
    {
    if (err) {
        console.error('Database connection failed:', err);
        return;
    }
    console.log('Connected to database');
});

// API route to get threat data
app.get('/threats', (req, res) => {
    db.query('SELECT * FROM threats', (err, results) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json(results);
        }
    });
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
