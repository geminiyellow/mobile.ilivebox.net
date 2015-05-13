'use strict';

var angular = require('angular');

module.exports = angular
    .module('common.ui', [
        require('./i18n').name
    ])
    .provider('$menu', require('./menu/$menuProvider'));
