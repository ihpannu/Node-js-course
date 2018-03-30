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

// GET METHOD FOR ALL THE COURSES
app.get('/api/genres', (req, res) => {
  res.send(genres);
});

// GET METHOD FOR SINGLE COURSE
app.get('/api/genres/:id', (req, res) => {
  const movies = genres.find(genre => genre.id === parseInt(req.params.id));
  if (!movies) return res.status(400).send('This is invalid ID ');
  return res.send(movies);
});

// POST METHOD
app.post('/api/genres', (req, res) => {
  const { error } = validateGenre(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const genre = {
    id: genres.length + 1,
    name: req.body.name
  };
  genres.push(genre);
  res.send(genre);
});

app.put('/api/genres/:id', (req, res) => {
  const { error } = validateGenre(res.body);
  if (error) return res.status(400).send(error.details[0].message);

  const genre = {
    name: req.body.name
  };
  res.send(genre);
});

// FUNCTION TO VALIDATE ENTRIES
function validateGenre(genre) {
  const schema = {
    name: Joi.string()
      .min(3)
      .required()
  };
  return Joi.validate(genre, schema);
}

const port = process.env.PORT || 3000;
app.listen(port, () => console.log('Listening at 3000'));
