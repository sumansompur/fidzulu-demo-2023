const router = require('express').Router()

const {getDvd} = require('../controllers/dvdController')

router.get('/dvds/all/:location',getDvd);
module.exports = router