const express = require('express');
const router = express.Router();
// Define routes for books
router.get('/all/location', (req, res) => {
  // Handle the route logic for bikes
  res.send('Get all books by location');
});

router.get('/team', (req, res) => {
  // Handle the route logic for book team information
  res.send('Get book team information');
});

router.get('/api/data', async (req, res) => {
  try {
    // Make an HTTP GET request using Axios
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
    // Send the data from the external API as a response
    res.json(response.data);
  } catch (error) {
    // Handle errors gracefully
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


function testMethod(){
  return true;
}

module.exports = router