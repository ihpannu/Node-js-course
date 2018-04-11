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
    res.status(404).send("This course with the given id is not found");
  res.send(course);
});

// POST METHOD
// ADDING NEW COURSE

app.post("/api/courses", (req, res) => {
  if (!req.body.name || req.body.name.length < 3) {
    // 400 BAD REQUEST
    res.status(400).send("Name is required and should be minimum 3 character");
    return;
  }
  const course = {
    id: courses.length + 1,
    name: req.body.name
  };
  courses.push(course);
  res.send(course);
});

// Enviroment Variable
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on port ${port}`));

// TO SET ENV VARIABLE WE USE // export PORT=8080
