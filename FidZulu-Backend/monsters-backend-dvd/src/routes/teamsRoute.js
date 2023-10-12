const router = require('express').Router()
const {getTeam} = require('../controllers/teamController')
router.get('/dvds/teams',getTeam);
module.exports = router