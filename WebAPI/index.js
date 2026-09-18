const express = require('express');
const app = express();
const port = 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Sample data
let users = [
  { id: 1, name: 'Alice', email: 'alice@example.com' },
  { id: 2, name: 'Bob', email: 'bob@example.com' },
  { id: 3, name: 'Sam', email: 'sam@example.com' }
];
app.get('/', (req, res) => {
  res.send('Welcome to my WebAPI!');
});

// GET all users
app.get('/users', (req, res) => {
  console.log("Fetching all users...");
  res.json(users);
});

// GET user by ID
app.get('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find(u => u.id === userId);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

// POST new user
app.post('/users', (req, res) => {
  console.log("Adding new user:", req.body);
  const newUser = { id: users.length + 1, ...req.body };
  users.push(newUser);
  res.status(201).json(newUser);
});

// Start server
app.listen(port, () => {
  console.log(`API running at http://localhost:${port}`);
});
