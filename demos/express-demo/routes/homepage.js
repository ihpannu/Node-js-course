const express = require('express');
const router = express.Router();

// THIS IS OUR HOME PAGE
router.get('/', (req, res) => {
  // res.send('This is express JS');
  res.render('index', {
    // RENDER VIEW FILE USING PUG
    title: 'My express app',
    message: 'Hello World'
  });
});

module.exports = router;
