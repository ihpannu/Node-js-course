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
  if (!user) res.status(404).send("Invalid user! This user does not exist...");
  res.send(user);
});

// TO POST A NEW USER
app.post("/users", (req, res) => {
  const user = {
    id: users.length + 1,
    name: req.body.name
  };
  users.push(user);
  res.send(user);
});

// ENV VARIABLE
const port = process.env.PORT || 8081;

// LISTENING ON PORT
app.listen(port, () => console.log(`listening on port ${port}`));
