const router = require('express').Router()
const {getBook} = require('../controllers/bookController')

router.get('/books/all/:location',getBook);
module.exports = router