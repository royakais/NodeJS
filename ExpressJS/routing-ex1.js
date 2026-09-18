// this exercise is to learn how to use express routing 
const express = require('express');
const app = express();
const port = 3000;  

//basic routes:
app.get('/', (req, res) => {
    //here we are sending a response to the client when they visit the root URL of our server, which is http://localhost:3000/
  res.send('Hello World from Express!');
});

app.get('/about', (req, res) => {
    //here we are sending a response to the client when they visit the about URL of our server, which is http://localhost:3000/about
  res.send('This is the about page.');
}); 

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
// lets save and run the server using the command: node routing-ex1.js