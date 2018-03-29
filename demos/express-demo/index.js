const Joi = require('joi');
const express = require('express');
const app = express();

app.use(express.json()); // Adding a piece of middleware
// COURSES OBJECT TO USE
const courses = [
  { id: 1, name: 'course1' },
  { id: 2, name: 'course2' },
  { id: 3, name: 'course3' }
];

// THIS IS OUR HOME PAGE
app.get('/', (req, res) => {
  res.send('This is express JS');
});

// THIS IS OUR COURSE PAGE
app.get('/api/courses', (req, res) => {
  res.send(courses);
});

// GET METHOD
app.get('/api/courses/:id', (req, res) => {
  const course = courses.find(c => c.id === parseInt(req.params.id));
  if (!course) return res.status(400).send('This is invalid Id');

  res.send(course);
});

//POST METHOD
app.post('/api/courses', (req, res) => {
  const { error } = validateCourse(req.body); // object destructure

  if (error) return res.status(400).send(error.details[0].message);

  const course = {
    id: courses.length + 1,
    name: req.body.name
  };
  courses.push(course);
  res.send(course);
});

// PUT METHOD
app.put('/api/courses/:id', (req, res) => {
  const course = courses.find(c => c.id === parseInt(req.params.id));
  if (!course) return res.status(400).send('This is invalid ID');

  const { error } = validateCourse(req.body); // object destructure
  if (error) return res.status(400).send(error.details[0].message);

  course.name = req.body.name;
  res.send(course);
});

// DELETE METHOD
app.delete('/api/courses/:id', (req, res) => {
  const course = courses.find(c => c.id === parseInt(req.params.id));
  if (!course) return res.status(400).send('This is invalid ID');

  const index = courses.indexOf(course);
  courses.splice(index, 1);
  res.send(course);
});

// VALIDATE FUNCTION
function validateCourse(course) {
  const schema = {
    name: Joi.string()
      .alphanum()
      .min(3)
      .required()
  };
  return Joi.validate(course, schema);
}

// LIVE EXPRESS SERVER
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));
