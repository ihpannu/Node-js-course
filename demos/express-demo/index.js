const config = require('config');
const helmet = require('helmet');
const morgan = require('morgan');
const Joi = require('joi');
const logger = require('./logger');
const auth = require('./auth');
const express = require('express');
const app = express();

// MORGAN SETUP
const envProcess = app.get('env');
if (envProcess === 'development') {
  app.use(morgan('tiny'));
  console.log('Morgan enabled...');
}

app.use(express.json()); // Adding a piece of middleware
app.use(logger);
app.use(auth);
app.use(express.urlencoded({ extended: true })); // key=value&key=value
app.use(express.static('public'));
app.use(helmet());

// CONFIGURATION
console.log(`Application Name: ${config.get('name')} `);
console.log(`Mail server: ${config.get('mail.host')} `);

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
      .min(3)
      .required()
  };
  return Joi.validate(course, schema);
}

// LIVE EXPRESS SERVER
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));
