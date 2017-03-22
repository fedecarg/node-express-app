'use strict';

var request = require('request'),
    baseurl = 'http://localhost:3000';

describe('Search functionality', function() {

    it('should be presented with a search field and submit button', function(done) {
        request.get(baseurl+'/search', function(error, res, body) {
            expect(body).toContain('search__location');
            expect(body).toContain('search__button');
            done();
        });
    });

    it('should returns results"', function(done) {
        request.post({url:baseurl+'/results', form:{q:'n11'}}, function(error, res, body) {
            expect(body).toContain('4-6 Station Road, New Barnet');
            expect(body).toContain('EN5 1QW');
            done();
        });
    });

    it('should returns message "No results found"', function(done) {
        request.post({url:baseurl+'/results', form:{q:'w4'}}, function(error, res, body) {
            expect(body).toContain('No results found');
            done();
        });
    });

});