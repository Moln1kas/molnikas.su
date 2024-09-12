var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('moln1kas');
});

module.exports = router;
