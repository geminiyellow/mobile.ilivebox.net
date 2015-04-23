'use strict';

var angular = require('angular');

module.exports = angular
    .module('common', [
        require('./libs').name,
        require('./util').name
    ])
    .run(function ($log) {
        $log.debug('common module - run');
    });
