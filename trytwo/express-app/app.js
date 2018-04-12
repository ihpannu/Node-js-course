const Joi = require("joi");
const express = require("express");

const app = express();
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

// TO PARSE THE POST DATA // MIDDLEWARE
app.use(express.json());

// CUSTOM MIDDLEWARE FUNCTION

app.use((req, res, next) => {
  console.log("Logging.....");
  next();
});

// GET METHOD
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/api/courses", (req, res) => {
  res.send(courses);
});

app.get("/api/courses/:id", (req, res) => {
  const course = courses.find(c => c.id === parseInt(req.params.id));
  if (!course)
    return res.status(404).send("This course with the given id is not found");
  res.send(course);
});

// POST METHOD
// ADDING NEW COURSE

app.post("/api/courses", (req, res) => {
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
app.put("/api/courses/:id", (req, res) => {
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

app.delete("/api/courses/:id", (req, res) => {
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

// Enviroment Variable
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on port ${port}`));

// TO SET ENV VARIABLE WE USE // export PORT=8080
