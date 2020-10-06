require('dotenv').config();
const express = require('express');

const app = express();

//get all Restaurants
app.get('/api/v1/restaurants', (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      restaurant: ['mcdonalds', 'wendys'],
    },
  });
});

//get individual Restaurant
app.get('/api/v1/restaurants/:id', (req, res) => {
  console.log(req);
});

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`server is up and listening on port http://localhost:${port}`);
});
