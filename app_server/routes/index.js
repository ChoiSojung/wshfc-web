var express = require('express');
var router = express.Router();
const ctrlPrograms = require('../controllers/programs');
const ctrlOthers = require('../controllers/others');

/* GET home page. */
router.get('/', ctrlPrograms.homelist);
router.get('/program', ctrlPrograms.programInfo);
router.get('/program/review/new', ctrlPrograms.addReview);

router.get('/about', ctrlOthers.about);

module.exports = router;
