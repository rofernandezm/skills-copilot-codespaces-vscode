// Create web server
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// Endpoint to get comments
app.get('/comments', (req, res) => {
  fs.readFile('comments.json', 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send('Error reading comments file');
    }
    res.json(JSON.parse(data));
  });
});

// Endpoint to post a comment
app.post('/comments', (req, res) => {
  const newComment = req.body;

  fs.readFile('comments.json', 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send('Error reading comments file');
    }
    const comments = JSON.parse(data);
    comments.push(newComment);

    fs.writeFile('comments.json', JSON.stringify(comments), (err) => {
      if (err) {
        return res.status(500).send('Error writing comments file');
      }
      res.status(201).json(newComment);
    });
  });
});