// we will create a simple server using nodejs

// we need to import the http module 
//node js has a built-in module called http, which allows us to create a server and listen to requests and responses

//node js has multiple module also

// we import modules using the require() function

const http= require('http');

//now here we create the server using the createServer() method of the http module
const server= http.createServer((req, res) => {
    //here we write what the client will see when they visit our server using res.writeHead() and res.end() methods
    res.writeHead(200, {'Content-Type': 'text/plain'});
    // we can change the content type to text/html if we want to send html content
    //we can also send json content by changing the content type to application/json
    res.end('Hello, World!');
});
//we need to define the PORT which the server will listen to, we can use any port number between 1024 and 65535, but we will use 3000 for this example
const PORT = 3000;
//we use server.listen() method to make the server listen to the defined PORT, and we can also use a callback function to log a message when the server is running
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

//and this is our simple nodejs server, we can run this code by saving the file and opening the terminal (ctrl+`) and typing: node yourfilename.js