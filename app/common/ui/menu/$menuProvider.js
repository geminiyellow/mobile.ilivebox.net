'use strict';

var angular = require('angular');

module.exports = function MenuProvider() {
    var $log = angular.injector(['ng']).get('$log');
    $log.debug('menu provider');

    var menus = [];

    this.addMenu = function (menu) {
        menus.push(menu)
    };

    this.$get = function () {
        return {
            getMenus: function () {
                return menus;
            }
        };
    };
};