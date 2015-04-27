'use strict';

function RootIndexCtrl($log, $menu) {

    var vm = this;

    vm.menus = $menu.getMenus();

}

module.exports = RootIndexCtrl;
