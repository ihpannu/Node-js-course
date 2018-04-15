const Joi = require("joi");
const morgan = require("morgan");
const helmet = require("helmet");
const express = require("express");
const debug = require("debug")("app:debugger");

// IMPORTED VIEWS MODULES
const home = require("./routes/home");
const users = require("./routes/users");
// IMPORTED JS MODULES
const auth = require("./auth");

const app = express();

// VIEWS MODULES use
app.use("/", home);
app.use("/users", users);
// THIS PARSE THE RESPONSE TO JSON // MIDDLEWARE functions
app.use(helmet());
app.use(express.json());
app.use(auth);

// SET TEMPLATE TO PUG

app.set("view engine", "pug");

// CHECK WHICH ENV IS ENABLED
if (app.get("env") === "development") {
  app.use(morgan("tiny"));
  debug("Morgan enabled...");
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
