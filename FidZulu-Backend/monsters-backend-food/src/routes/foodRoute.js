const router = require('express').Router()
const {getFood} = require('../controllers/foodController')

router.get('/food/all/:location',getFood);
module.exports = router