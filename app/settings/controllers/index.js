'use strict';

function SettingsIndexCtrl(modules) {

    var vm = this;

    vm.title = 'Settings';

    vm.mods = modules;
}

SettingsIndexCtrl.template = require('./../views/index.html');

SettingsIndexCtrl.resolve = {
    modules: function () {
        return [
            require('../modules/language/package.json'),
            require('../modules/account/package.json')
        ];
    }
};

module.exports = SettingsIndexCtrl;
