'use strict';

var angular = require('angular');
var ionic = require('ionic/js/ionic');

var ilivebox = module.exports = angular
    .module('ilivebox',
    [
        require('./common').name,
        require('./menu').name,
        require('./about').name,
        require('./main').name
    ])
    .run(function ($log) {
        $log.debug('ilivebox - run');
    });

require('./index.app.scss');

ionic.Platform.ready(function () {
    angular.bootstrap(window.document, [ilivebox.name]);
});
