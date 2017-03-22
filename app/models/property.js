'use strict';

/**
 * I've decided not to use Backbone and BackboneMongo in order to keep the number
 * of dependencies to a minimum and reduce complexity.
 *
 * https://www.npmjs.com/package/backbone
 * https://www.npmjs.com/package/backbone-mongo
 */
var fs = require('fs'),
    path = require('path');

/**
 * Property entity class.
 *
 * @param {Object} data
 * @type  {Object}
 * @constructor
 */
var Property = function(data) {
    data = data || {};

    this.num_bedrooms = null;
    this.agent_address = null;
    this.property_type = null;
    this.description = null;
    this.agent_postcode = null;
    this.details_url = null;
    this.price = null;
    this.agent_name = null;
    this.agent_logo = null;
    this.agent_phone = null;
    this.image_url = null;

    for (var property in this) {
        if (data[property]) {
            this.set(property, data[property]);
        }
    }
};

Property.prototype.get = function(key) {
    if (!this.hasOwnProperty(key)) {
        throw new Error(key + ' not defined');
    } else {
        return this[key];
    }
};

Property.prototype.set = function(key, value) {
    if (!this.hasOwnProperty(key)) {
        throw new Error(key + ' not defined');
    } else {
        this[key] = value;
    }
};


/**
 * Property finder object (active record pattern).
 *
 * @type {Object}
 */
var PropertyFinder = {
    dataSource: {
        'n11': path.join(__dirname, '/../../public/data/data_n11.json')
    }
};

PropertyFinder.findByPostcode = function(postcode) {
    var outwardCode = '';

    if (postcode) {
        // remove inward code
        postcode = postcode.replace(/\s/g, '').substring(0, 4).toLowerCase();

        // search for "n11", "n1" and "n"
        for (var code in this.dataSource) {
            if (code.toString().startsWith(postcode)) {
                outwardCode = code;
                break;
            }
        }
    }

    return this.findByLocation(outwardCode);
};

PropertyFinder.findByLocation = function(location) {
    var data,
        collection = [];

    if (location && this.dataSource[location]) {
        data = JSON.parse(fs.readFileSync(this.dataSource[location]));

        for (var index in data.listing) {
            collection.push(new Property(data.listing[index]));
        }
    }

    return collection;
};

module.exports = PropertyFinder;

