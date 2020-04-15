var express = require('express');
var router = express.Router();
const filmesController = require('../controllers/filmesController')

/* GET home page. */
router.get('/', filmesController.index);

module.exports = router;
