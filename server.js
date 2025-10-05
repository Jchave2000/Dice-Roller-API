const express = require('express');
const path = require('path');
const cors = require('cors'); // << Add this
const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS for all routes
app.use(cors()); // << Add this

// Serve static files from 'public'
app.use(express.static(path.join(__dirname, 'public')));

// API endpoint to roll dice
app.get('/roll', (req, res) => {
    const dice = [];
    for (let i = 0; i < 6; i++) {
        dice.push(Math.floor(Math.random() * 6) + 1);
    }
    res.json({ dice });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
