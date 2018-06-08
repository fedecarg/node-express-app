'use strict';

var express = require('express'),
    router = express.Router();

var Property = require('../models/property');

router.post('/results', function(req, res) {
    var q = req.body.q,
        properties = Property.findByPostcode(q);

    res.render('results', {
        properties: properties,
        total: properties.length,
        layout: 'search'
    });
});

module.exports = router;
