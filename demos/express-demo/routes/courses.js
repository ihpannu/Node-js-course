const express = require('express');
const router = express.Router();

// COURSES OBJECT TO USE
const courses = [
  { id: 1, name: 'course1' },
  { id: 2, name: 'course2' },
  { id: 3, name: 'course3' }
];

// THIS IS OUR COURSE PAGE
router.get('/', (req, res) => {
  res.send(courses);
});

// GET METHOD
router.get('/:id', (req, res) => {
  const course = courses.find(c => c.id === parseInt(req.params.id));
  if (!course) return res.status(400).send('This is invalid Id');

  res.send(course);
});

//POST METHOD
router.post('/', (req, res) => {
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
router.put('/:id', (req, res) => {
  const course = courses.find(c => c.id === parseInt(req.params.id));
  if (!course) return res.status(400).send('This is invalid ID');

  const { error } = validateCourse(req.body); // object destructure
  if (error) return res.status(400).send(error.details[0].message);

  course.name = req.body.name;
  res.send(course);
});

// DELETE METHOD
router.delete('/:id', (req, res) => {
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

module.exports = router;
