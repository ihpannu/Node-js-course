const express = require("express");
const router = express.Router();

// COURSES ARRAY
const courses = [
  {
    id: 1,
    name: "first"
  },
  {
    id: 2,
    name: "second"
  },
  {
    id: 3,
    name: "Third"
  }
];

// GET COURSES AND DISPLAY
router.get("/", (req, res) => {
  res.send(courses);
});

router.get("/:id", (req, res) => {
  const course = courses.find(c => c.id === parseInt(req.params.id));
  if (!course)
    return res.status(404).send("This course with the given id is not found");
  res.send(course);
});

// POST METHOD
// ADDING NEW COURSE

router.post("/", (req, res) => {
  const { error } = validateCourse(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  const course = {
    id: courses.length + 1,
    name: req.body.name
  };
  courses.push(course);
  res.send(course);
});

// PUT METHOD
router.put("/:id", (req, res) => {
  const course = courses.find(c => c.id === parseInt(req.params.id));
  if (!course)
    return res.status(404).send("This course with the given id is not found");

  /* OBJECT DESTRUCTING
    FROM THIS TO
      const result = validateCourse(req.body);

    THIS
      const {error} = validateCourse(req.body)
  */

  const { error } = validateCourse(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  course.name = req.body.name;
  res.send(course);
});

router.delete("/:id", (req, res) => {
  const course = courses.find(c => c.id === parseInt(req.params.id));
  if (!course)
    return res.status(404).send("This course with the given id is not found");

  // DELETE
  const index = courses.indexOf(course);
  courses.splice(index, 1);
  res.send(course);
});

function validateCourse(course) {
  const schema = {
    name: Joi.string()
      .min(3)
      .required()
  };
  return Joi.validate(course, schema);
}

module.exports = router;
