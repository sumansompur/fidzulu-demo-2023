const router = require('express').Router()
const {getTeam} = require('../controllers/teamController')
router.get('/food/teams',getTeam);
module.exports = router