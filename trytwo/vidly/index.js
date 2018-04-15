const Joi = require("joi");
const express = require("express");
const app = express();

const server = app.use(express.json());

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

// GET
app.get("/", (req, res) => {
  res.send("Home Page for vidly");
});

// GET GENRES
app.get("/api/genres", (req, res) => {
  // show the list to the user
  res.send(genres);
});

app.get("/api/genres/:id", (req, res) => {
  // find and display the genre
  const genre = genres.find(g => g.id === parseInt(req.params.id));
  // check if the genre exist or not
  if (!genre) return res.send("Invalid Id! This genre does not exist");
  // send response back to user
  res.send(genre);
});

// POST
app.post("/api/genres", (req, res) => {
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

app.put("/api/genres/:id", (req, res) => {
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

app.delete("/api/genres/:id", (req, res) => {
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

const port = process.env.PORT || 8080;
app.listen(8080, () => console.log(`listening on port ${port}`));
