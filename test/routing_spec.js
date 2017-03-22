'use strict';

var request = require('request'),
    baseurl = 'http://localhost:3000';

describe('Routing', function() {

    it('should show not found page', function(done) {
        request.get(baseurl+'/', function(error, res, body) {
            expect(res.statusCode).toBe(404);
            done();
        });
    });

    it('should show search page', function(done) {
        request.get(baseurl+'/search', function(error, res, body) {
            expect(res.statusCode).toBe(200);
            done();
        });
    });

});
