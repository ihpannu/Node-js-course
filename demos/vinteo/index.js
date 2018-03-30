const Joi = require('joi');
const express = require('express');

const app = express();
app.use(express.json());

const genres = [
  { id: 1, name: 'Comedy' },
  { id: 2, name: 'Romantic' },
  { id: 3, name: 'Action' },
  { id: 4, name: 'Fantasy' }
];
// Home Page
app.get('/', (req, res) => {
  res.send('Home Page');
});

// GET METHOD

app.get('/api/genres', (req, res) => {
  const movies = genres.find(genre => parseInt(req.id));
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log('Listening at 3000'));
