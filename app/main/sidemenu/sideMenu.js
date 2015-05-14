'use strict';

var SideMenuCtrl = require('./sideMenuController');

module.exports = function SideMenu() {
    return {
        restrict: 'E',
        replace: true,
        controllerAs: 'sideMenuCtrl',
        controller: SideMenuCtrl,
        template: require('./sideMenu.html')
    };
};
