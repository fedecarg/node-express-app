'use strict';

var express = require('express'),
    router = express.Router();

router.get('/search', function(req, res) {
    res.render('search', {
    	layout: 'search'
    });
});

module.exports = router;
