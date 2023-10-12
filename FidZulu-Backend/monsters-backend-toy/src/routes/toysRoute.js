const router = require('express').Router()
const {getToys} = require('../controllers/toysController')

router.get('/toys/all/:location',getToys);
module.exports = router