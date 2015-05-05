'use strict';

var angular = require('angular');

module.exports = angular
    .module('ilivebox.menu', [])
    .run(function ($log) {
        $log.debug('ilivebox.menu module - run');
    });
