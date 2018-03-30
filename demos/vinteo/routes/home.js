const express = require('express');
const genres = require('./genres');
const router = express.Router();

router.use('/api/genres', genres);
// Home Page
router.get('/', (req, res) => {
  res.send('Home Page');
});

module.exports = router;
