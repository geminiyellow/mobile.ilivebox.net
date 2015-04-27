'use strict';

var moduleLanguage = require('../modules/language');

function SettingsIndexCtrl($log, $translate, modules) {

    var vm = this;

    vm.title = 'Settings';

    vm.modules = modules;
}

SettingsIndexCtrl.template = require('./../views/index.html');

SettingsIndexCtrl.resolve = {
    modules: function () {
        return [moduleLanguage.name]
    }
};

module.exports = SettingsIndexCtrl;
