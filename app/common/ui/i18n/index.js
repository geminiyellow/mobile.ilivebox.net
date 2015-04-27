'use strict';

var angular = require('angular');

require('angular-cookies');
require('angular-translate/angular-translate');
require('angular-translate-storage-cookie/angular-translate-storage-cookie');
require('angular-translate-storage-local/angular-translate-storage-local');
require('angular-translate-loader-static-files/angular-translate-loader-static-files');

module.exports = angular
    .module('common.ui.i18n', ['pascalprecht.translate', 'ngCookies'])
    .config(function ($translateProvider) {

        $translateProvider.useStaticFilesLoader({
            prefix: 'resources/i18n/',
            suffix: '.json'
        });

        $translateProvider.preferredLanguage('en_US');
        $translateProvider.fallbackLanguage('en_US');

        $translateProvider.useLocalStorage();
        $translateProvider.useSanitizeValueStrategy('escaped');
    });
