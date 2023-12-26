const express = require('express');
const path = require('path');
const app = express();

const port = 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Set up a route to render an EJS template
app.get('/', (req, res) => {
    res.render('index', { title: 'Node.js Express App with EJS' });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
