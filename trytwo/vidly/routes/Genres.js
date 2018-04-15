const express = require("express");
const router = express.Router();

const genres = [
  {
    id: 1,
    name: "A green door",
    type: "Rock"
  },
  {
    id: 2,
    name: "A white horse",
    type: "Classical"
  },
  {
    id: 3,
    name: "A simple love",
    type: "Pop"
  }
];

// GET GENRES
router.get("/", (req, res) => {
  // show the list to the user
  res.send(genres);
});

router.get("/:id", (req, res) => {
  // find and display the genre
  const genre = genres.find(g => g.id === parseInt(req.params.id));
  // check if the genre exist or not
  if (!genre) return res.send("Invalid Id! This genre does not exist");
  // send response back to user
  res.send(genre);
});

// POST
router.post("/", (req, res) => {
  // validate the input
  const { error } = validateGenres(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  const genre = {
    id: genres.length + 1,
    name: req.body.name,
    type: req.body.type
  };
  genres.push(genre);
  res.send(genre);
});

// PUT TO UPDATE CURRENT GENRE

router.put("/:id", (req, res) => {
  // find and display the genre
  const genre = genres.find(g => g.id === parseInt(req.params.id));

  // check if the genre exist or not
  if (!genre) return res.send("Invalid Id! This genre does not exist");
  // validate the input
  const { error } = validateGenres(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  // send response back to user

  (genre.type = req.body.type), (genre.name = req.body.name);

  res.send(genre);
});

router.delete("/:id", (req, res) => {
  // find and display the genre
  const genre = genres.find(g => g.id === parseInt(req.params.id));

  // check if the genre exist or not
  if (!genre) return res.send("Invalid Id! This genre does not exist");
  // validate the input

  const index = genres.indexOf(genre);
  genres.splice(index, 1);
  res.send(genre);
});

function validateGenres(genre) {
  const schema = {
    name: Joi.string()
      .min(4)
      .required(),
    type: Joi.string().required()
  };

  return Joi.validate(genre, schema);
}

module.exports = router;
