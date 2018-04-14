const config = require("config");
const Joi = require("joi");
const helmet = require("helmet");
const morgan = require("morgan");
const express = require("express");
const courses = require("./routes/courses");
const startupDebugger = require("debug")("app:startup");
const dbDebugger = require("debug")("app:db");

const app = express();

// Imported custom MIDDLEWARE functions
const logger = require("./logger");
const auth = require("./auth");

// TO PARSE THE POST DATA // MIDDLEWARE
app.use("/api/courses", courses);
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.static("public"));
// USING PUG
app.set("view engine", "pug");
app.set("views", "./views"); // default value
// config
console.log(`Application name : ${config.get("name")}`);
console.log(`Mail server : ${config.get("mail.host")}`);
console.log(`Mail password : ${config.get("mail.password")}`);

// CHECK WHICH ENV IS ENABLEd
if (app.get("env") === "development") {
  app.use(morgan("tiny"));
  startupDebugger("Morgan Enabled...");
}

dbDebugger("Connected to the database");

// CUSTOM MIDDLEWARE FUNCTION
app.use(logger);
app.use(auth);

// GET METHOD
app.get("/", (req, res) => {
  res.render("index", { title: "Express Pug app" });
});

// Enviroment Variable
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on port ${port}`));

// TO SET ENV VARIABLE WE USE // export PORT=8080
