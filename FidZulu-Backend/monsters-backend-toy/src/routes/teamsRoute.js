const router = require('express').Router()
const {getTeam} = require('../controllers/teamController')
router.get('/toys/teams',getTeam);
module.exports = router