'use strict';

var express = require('express'),
    router = express.Router();

router.get('/search', function(req, res) {
    res.render('search');
});

module.exports = router;
