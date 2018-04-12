const Joi = require("joi");
const express = require("express");
const app = express();
const users = [
  {
    id: 1,
    name: "Sid"
  },
  {
    id: 2,
    name: "John"
  },
  {
    id: 3,
    name: "Goldy"
  }
];

// THIS PARSE THE RESPONSE TO JSON
app.use(express.json());

// HOMEPAGE
app.get("/", (req, res) => {
  res.send("This is the home page");
});

// TO GET ALL THE USERS
app.get("/users", (req, res) => {
  res.send(users);
});

// TO GET A SINGLE USER
app.get("/users/:id", (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));

  // CHECK IF THE USER DOES NOT EXIST
  if (!user)
    return res.status(404).send("Invalid user! This user does not exist...");
  res.send(user);
});

// TO POST A NEW USER
app.post("/users", (req, res) => {
  // VALIDATE THE INPUT
  const { error } = validateUser(req.body);
  // CATCH THE ERROR AND DISPLAY
  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  const user = {
    id: users.length + 1,
    name: req.body.name
  };
  users.push(user);
  res.send(user);
});

// TO UPDATE THE CURRENT USER USING PUT
app.put("/users/:id", (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  // CHECK IF THE USER DOES NOT EXIST
  if (!user)
    return res.status(404).send("Invalid user! This user does not exist...");
  // VALIDATE THE INPUT
  const { error } = validateUser(req.body);
  // CATCH THE ERROR AND DISPLAY
  if (error) {
    res.status(400).send(error.details[0].message);
  }
  user.name = req.body.name;
  res.send(user);
});

//  TO DELETE THE CURRENT USER

app.delete("/users/:id", (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user)
    return res.status(404).send("Invalid user ID! This user does not exist...");

  const index = users.indexOf(user);
  users.splice(index, 1);
  res.send(user);
});

// VALIDATE FUNCTION
function validateUser(user) {
  // CREATE SCHEMA TO VALIDATE THE INPUT
  const schema = {
    name: Joi.string()
      .min(3)
      .required()
  };
  // THIS VALIDATED THE SCHEMA
  return Joi.validate(user, schema);
}

// ENV VARIABLE
const port = process.env.PORT || 8081;

// LISTENING ON PORT
app.listen(port, () => console.log(`listening on port ${port}`));

/*
  // VALIDATE POST INPUT OLD FASHION
  if (!req.body.name || req.body.name.length < 3) {
    // 400 BAD REQUEST
    res.status(400).send("Name is required and should be minimum 3 character");
    return;
  }


  // OBJECT DESTRUCTING
    FROM THIS TO
      const result = validateCourse(req.body);

    THIS
      const {error} = validateCourse(req.body)

  */
