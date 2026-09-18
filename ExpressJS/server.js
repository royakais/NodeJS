//To create a Web server using Express.js:
//Project Setup: Create a directory and initialize a NodeJS project using:
//npm init 
//Install Express.js into your Node.js project using the command:
//npm install express
//Create a file called “server.js”.

//this will create a json file
//json is javascript object notation, it is a lightweight data-interchange format that is easy for humans to read and write, and easy for machines to parse and generate

const express = require('express'); //import express module
const app = express();
const port = 8080;//define the port number for the server to listen on

// Define a route for GET requests to the root URL
//GET is a method used to request data from a specified resource. It is one of the most common HTTP methods, and it is used to retrieve information from the server. When a client sends a GET request to the server, it is asking for data or information from the server. The server then processes the request and sends back the requested data in the response. GET requests are typically used to retrieve web pages, images, or other resources from a server.
app.get('/', (req, res) => {
    res.send('Hello World from Express!');
});

// Start the server
//listen() method is used to bind and listen for connections on the specified host and port. It is a method of the http.Server class in Node.js, which is used to create an HTTP server. When you call the listen() method, it starts the server and begins listening for incoming requests on the specified port. The first argument to the listen() method is the port number, and the second argument is an optional callback function that is called when the server is successfully started and listening for requests.
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
//save and run the server using the command: node server.js