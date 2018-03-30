const Joi = require('joi');
const express = require('express');
const home = require('./routes/home');

const app = express();
app.use(express.json());

app.use('/', home);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log('Listening at 3000'));
