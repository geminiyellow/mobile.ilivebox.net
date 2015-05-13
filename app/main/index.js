'use strict';

var angular = require('angular');
var RootContainer = require('./directives/rootContainer');

module.exports = angular
    .module('ilivebox.main', [
        require('../common/libs').name
    ])

    .constant('appVersion', require('../../package.json').version)

    .constant('config', {
        backdrop: true,
        debug: true,
        defaultRoute: '/',
        activeTimerId: 'at',
        hrefWhitelist: /^\s*(https?|ftp|mailto|file|tel):/
    })

    .directive('rootContainer', RootContainer)

    .config(function ($compileProvider, $urlRouterProvider, config) {
        // set anchor href whitelist
        if (config.hrefWhitelist) {
            $compileProvider.aHrefSanitizationWhitelist(config.hrefWhitelist);
        }
        // add default route
        if (config.defaultRoute) {
            $urlRouterProvider.otherwise(config.defaultRoute);
        }
    })

    .run(function ($log, $rootScope, $ionicBackdrop, $timeout, config) {

        $log.debug('ilivebox.main module - run');

        if (config.debug) {
            $rootScope.$on('$stateChangeStart',
                function (event, toState) {
                    $log.debug('$stateChangeStart -', toState.name);
                });

            $rootScope.$on('$stateChangeSuccess',
                function (event, toState) {
                    $log.debug('$stateChangeSuccess -', toState.name);
                });
        }

        $rootScope.$on('$stateNotFound',
            function (event, notfoundState, fromState, fromParams) {
                $log.warn('$stateNotFound', {
                    event: event,
                    notfoundState: notfoundState,
                    fromState: fromState,
                    fromParams: fromParams
                });
            });

        $rootScope.$on('$stateChangeError',
            function (event, toState, toParams, fromState, fromParams, error) {
                $log.error('$stateChangeError', {
                    event: event,
                    toState: toState,
                    toParams: toParams,
                    fromState: fromState,
                    fromParams: fromParams,
                    error: error
                });
                if (error) {
                    throw error;
                }
            });

        // add backdrop if enabled
        if (config.backdrop) {
            $ionicBackdrop.retain();

            $timeout(function () {
                $ionicBackdrop.release();
            }, 600);
        }
    });
