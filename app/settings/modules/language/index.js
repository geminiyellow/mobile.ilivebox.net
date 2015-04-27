'use strict';

var angular = require('angular');
var SettingsLanguageCtrl = require('./controllers/language');

module.exports = angular
    .module('settings.language', [])
    .config(function ($stateProvider) {

        $stateProvider
            .state('settings.language', {
                url: '/language',
                controllerAs: 'settingsLanguageCtrl',
                controller: SettingsLanguageCtrl,
                template: SettingsLanguageCtrl.template,
                resolve: SettingsLanguageCtrl.resolve
            });
    })

    .constant('languages', [
        {code: 'en_US', name: 'English', local: 'United States'},
        {code: 'zh_CN', name: '简体中文', local: '中国'}
    ])

    .run(function ($log) {
        $log.debug('ilivebox.settings.language module -run');
    });
