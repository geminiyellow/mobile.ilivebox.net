'use strict';

var angular = require('angular');

// set the public path
var scripts = global.document.getElementsByTagName('script');
var src = scripts[scripts.length - 1].getAttribute('src');
global.__webpack_public_path__ = src.substr(0, src.lastIndexOf('/') + 1);

// Add Angular/Ionic dependencies
require('angular-animate');
require('angular-sanitize');
require('angular-ui-router');
require('ionic/js/ionic');
require('ionic/js/ionic-angular');

module.exports = angular
    .module('common.libs', ['ionic'])
    .run(function ($log) {
        $log.debug('common.libs module - run');
    });
