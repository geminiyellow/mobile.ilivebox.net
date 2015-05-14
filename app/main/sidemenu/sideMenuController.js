'use strict';

function SideMenuCtrl($log, $menu) {

    var vm = this;

    vm.menus = $menu.getMenus();
}

module.exports = SideMenuCtrl;
