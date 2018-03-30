const express = require('express');
const genres = require('./genres');
const router = express.Router();

// Home Page
router.get('/', (req, res) => {
  res.send('Home Page');
});
// GENRES PAGE
router.use('/api/genres', genres);
module.exports = router;
