'use strict';

var angular = require('angular');

module.exports = angular
    .module('common.ui', [])
    .provider('$menu', require('./menu/$menuProvider'));
