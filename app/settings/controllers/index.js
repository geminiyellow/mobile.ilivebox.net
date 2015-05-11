'use strict';

var moduleLanguage = require('../modules/language');
var moduleAccount = require('../modules/account');

function SettingsIndexCtrl($log, $translate, modules) {

    var vm = this;

    vm.title = 'Settings';

    vm.modules = modules;
}

SettingsIndexCtrl.template = require('./../views/index.html');

SettingsIndexCtrl.resolve = {
    modules: function () {
        return [
            moduleLanguage.name,
            moduleAccount.name
        ];
    }
};

module.exports = SettingsIndexCtrl;
