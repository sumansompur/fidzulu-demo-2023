const router = require('express').Router()
const {getBikes} = require('../controllers/bikeController')
const {getTeam} = require('../controllers/teamController')
router.get('/bikes/teams',getTeam);
module.exports = router