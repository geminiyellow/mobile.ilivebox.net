'use strict';

var angular = require('angular');
var AboutIndexCtrl = require('./controllers/index');

module.exports = angular
    .module('ilivebox.about', [
        require('../common/libs').name
    ])

    .config(function ($stateProvider, $menuProvider) {

        $menuProvider.addMenu({url: 'about.index', title: 'About'});

        $stateProvider
            .state('about', {
                url: '/about',
                abstract: true,
                template: '<ui-view/>'
            })
            .state('about.index', {
                url: '/',
                controllerAs: 'aboutIndexCtrl',
                controller: AboutIndexCtrl,
                template: AboutIndexCtrl.template,
                resolve: AboutIndexCtrl.resolve
            });

    })

    .run(function ($log) {
        $log.debug('ilivebox.about module - run');
    });
