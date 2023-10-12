const router = require('express').Router()
const {getBikes} = require('../controllers/bikeController')

router.get('/bikes/all/:location',getBikes);
module.exports = router