'use strict';

var angular = require('angular');
var $exceptionHandler = require('./services/$exceptionHandler');
var utils = require('./services/utils');

module.exports = angular
    .module('common.util', [])

    .service('$exceptionHandler', $exceptionHandler)
    .service('_', utils)

    .run(function ($log) {
        $log.debug('common.util module - run');
    });
