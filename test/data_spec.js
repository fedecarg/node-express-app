'use strict';

var request = require('request'),
    baseurl = 'http://localhost:3000';

describe('Data manipulation', function() {

    it('should print out "number of bedrooms" and "property type"', function(done) {
        request.post({url:baseurl+'/results', form:{q:'n11'}}, function(error, res, body) {
            expect(body).toContain('5');
            expect(body).toContain('Detached house');
            done();
        });
    });

    it('should print out "agent address" and "agent postcode"', function(done) {
        request.post({url:baseurl+'/results', form:{q:'n11'}}, function(error, res, body) {
            expect(body).toContain('4-6 Station Road, New Barnet');
            expect(body).toContain('EN5 1QW');
            done();
        });
    });

});
