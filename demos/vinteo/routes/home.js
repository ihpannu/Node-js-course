const express = require('express');
const genres = require('./genres');
const router = express.Router();

// Home Page
router.get('/', (req, res) => {
  res.render('index');
});

// GENRES PAGE
router.use('/api/genres', genres);
module.exports = router;
