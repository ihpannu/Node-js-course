const express = require('express');
const router = express.Router();
const genres = [
  { id: 1, name: 'Comedy' },
  { id: 2, name: 'Romantic' },
  { id: 3, name: 'Action' },
  { id: 4, name: 'Fantasy' }
];
// Home Page
router.get('/', (req, res) => {
  res.send('Home Page');
});

// GET METHOD FOR ALL THE COURSES
router.get('/api/genres', (req, res) => {
  res.send(genres);
});

// GET METHOD FOR SINGLE COURSE
router.get('/api/genres/:id', (req, res) => {
  const movies = genres.find(genre => genre.id === parseInt(req.params.id));
  if (!movies) return res.status(400).send('This is invalid ID ');
  return res.send(movies);
});

// POST METHOD
router.post('/api/genres', (req, res) => {
  const { error } = validateGenre(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const genre = {
    id: genres.length + 1,
    name: req.body.name
  };
  genres.push(genre);
  res.send(genre);
});

// PUT METHOD
router.put('/api/genres/:id', (req, res) => {
  const genre = genres.find(genre => genre.id === parseInt(req.params.id));
  if (!genre) return res.status(400).send('This is invalid ID ');

  const { error } = validateGenre(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  genre.name = req.body.name;
  res.send(genre);
});

// DELETE METHOD
router.delete('/api/genres/:id', (req, res) => {
  const genre = genres.find(genre => genre.id === parseInt(req.params.id));
  if (!genre) return res.status(400).send('This is invalid ID ');

  const index = genres.indexOf(genre);
  genres.splice(index, 1);
  return res.send(genre);
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
