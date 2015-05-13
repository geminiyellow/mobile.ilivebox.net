'use strict';

var _ = require('lodash');
var fs = require('fs');
var path = require('path');
var config = require('../config');

_.mixin({
    runCallback: function (done) {
        return function (error) {
            if (!error) {
                done();
            }
        };
    }
});

module.exports = _;
