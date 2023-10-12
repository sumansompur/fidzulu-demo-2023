const router = require('express').Router()
const { getLaptop } = require('../controllers/laptopController')

router.get('/laptops/all/:location', getLaptop);
module.exports = router;