'use strict';

var angular = require('angular');

module.exports = angular
    .module('common', [
        require('./libs').name,
        require('./util').name,
        require('./ui').name
    ])
    .run(function ($log) {
        $log.debug('common module - run');
    });
