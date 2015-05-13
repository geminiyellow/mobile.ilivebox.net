'use strict';

var angular = require('angular');
var SettingsAccountCtrl = require('./controllers/account');

module.exports = angular
    .module('settings.account', [])
    .config(function ($stateProvider) {

        $stateProvider
            .state('settings.account', {
                url: '/account',
                controllerAs: 'settingsAccountCtrl',
                controller: SettingsAccountCtrl,
                template: SettingsAccountCtrl.template,
                resolve: SettingsAccountCtrl.resolve
            });
    })

    .run(function ($log) {
        $log.debug('ilivebox.settings.account module -run');
    });
