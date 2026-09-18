//route parameters are named url segments
// route parameter function is to capture the values specified at their position in the URL. The captured values are populated in the req.params object, with the name of the route parameter specified in the path as their respective keys.

const express = require('express');
const app = express();
const port = 3000;

// Route 1 with a parameter
app.get('/users/:userId', (req, res) => {
    // Access parameters using req.params
    res.send(`User ID: ${req.params.userId}`);
});

// Route 2 with a parameter
app.get('/books/:bookId', (req, res) => {
    // Access parameters using req.params
    res.send(`Book ID: ${req.params.bookId}`);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
// save and run the server using the command: node route-param.js