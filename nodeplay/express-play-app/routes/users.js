const express = require("express");
const router = express.Router();

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

// TO GET ALL THE USERS
router.get("/", (req, res) => {
  res.send(users);
});

// TO GET A SINGLE USER
router.get("/:id", (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));

  // CHECK IF THE USER DOES NOT EXIST
  if (!user)
    return res.status(404).send("Invalid user! This user does not exist...");
  res.send(user);
});

// TO POST A NEW USER
router.post("/", (req, res) => {
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
router.put("/:id", (req, res) => {
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

router.delete("/:id", (req, res) => {
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

module.exports = router;
