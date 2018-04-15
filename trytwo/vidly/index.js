const Joi = require("joi");
const express = require("express");
const app = express();
// VIEWS MODULES
const Home = require("./routes/Home");
const Genres = require("./routes/Genres");

// CREATE THE SERVER
const server = app.use(express.json());

// SET THE HOME PAGE
app.use("/", Home);
app.use("/api/genres", Genres);

//SET PUG AS VIEW ENGINE
app.set("view engine", "pug");

const port = process.env.PORT || 8080;
app.listen(8080, () => console.log(`listening on port ${port}`));
