const Joi = require("joi");
const express = require("express");
const app = express();
const morgan = require("morgan");

// VIEWS MODULES
const Home = require("./routes/Home");
const Genres = require("./routes/Genres");

// CREATE THE SERVER
const server = app.use(express.json());

//MORGAN
// CHECK WHICH ENV IS ENABLEd
if (app.get("env") === "development") {
  app.use(morgan("tiny"));
  console.log("Morgan ENABLEd......");
}

// SET THE HOME PAGE
app.use("/", Home);
app.use("/api/genres", Genres);

//SET PUG AS VIEW ENGINE
app.set("view engine", "pug");

const port = process.env.PORT || 8080;
app.listen(8080, () => console.log(`listening on port ${port}`));
