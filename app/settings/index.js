'use strict';

var angular = require('angular');
var SettingsIndexCtrl = require('./controllers/index');
var modules = SettingsIndexCtrl.resolve.modules().concat([require('../common/libs').name]);

module.exports = angular
    .module('ilivebox.settings', modules)

    .config(function ($stateProvider) {

        $stateProvider
            .state('settings', {
                url: '/settings',
                abstract: true,
                template: '<ui-view/>'
            })
            .state('settings.index', {
                url: '/',
                controllerAs: 'settingsIndexCtrl',
                controller: SettingsIndexCtrl,
                template: SettingsIndexCtrl.template,
                resolve: SettingsIndexCtrl.resolve
            });

    })

    .run(function ($log) {
        $log.debug('ilivebox.settings module - run');
    });
