const config = require('config');
const helmet = require('helmet');
const morgan = require('morgan');
const Joi = require('joi');
const logger = require('./middleware/logger');
const auth = require('./middleware/auth');
const homepage = require('./routes/homepage');
const courses = require('./routes/courses');
const express = require('express');
const app = express();
//DEBUG PACKAGE USAGE
const debug = require('debug')('app:start');

// MORGAN SETUP
const envProcess = app.get('env');
if (envProcess === 'development') {
  app.use(morgan('tiny'));
  debug('Morgan enabled...');
}

app.set('view engine', 'pug');
app.use(express.json()); // Adding a piece of middleware
app.use(logger);
app.use(auth);
app.use(express.urlencoded({ extended: true })); // key=value&key=value
app.use(express.static('public'));
app.use(helmet());
app.use('/', homepage);
app.use('/api/courses', courses);

// CONFIGURATION
console.log(`Application Name: ${config.get('name')} `);
console.log(`Mail server: ${config.get('mail.host')} `);
// console.log(`Mail password: ${config.get('mail.password')} `);

// LIVE EXPRESS SERVER
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));
