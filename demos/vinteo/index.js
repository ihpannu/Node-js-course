const Joi = require('joi');
const express = require('express');
const genres = require('./routes/genres');

const app = express();
app.use(express.json());
app.get('/api/genres/:id', (req, res) => {
app.use('/', home);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log('Listening at 3000'));
