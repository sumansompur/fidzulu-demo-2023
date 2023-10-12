const router = require('express').Router()
const {getTeam} = require('../controllers/teamController');

router.get('/laptops/teams', getTeam);
module.exports = router;