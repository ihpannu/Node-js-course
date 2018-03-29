const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('This is express JS');
});
app.get('/api/courses', (req, res) => {
  res.send('This is course page');
});
app.get('/about', (req, res) => {
  res.send('This is about page');
});
app.get('/blog', (req, res) => {
  res.send('This is blog page');
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));
