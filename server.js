const express = require('express');
require('dotenv').config()
const app = express();
const port = process.env.PORT;

// Define a route
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

