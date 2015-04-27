'use strict';

function RootIndexCtrl($log, $menu) {

    var vm = this;

    vm.canDragContent = true;

    vm.menus = $menu.getMenus();
}

module.exports = RootIndexCtrl;
