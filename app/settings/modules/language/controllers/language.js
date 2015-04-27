'use strict';

function SettingsLanguageCtrl($log, $translate, languages) {

    var vm = this;

    vm.languages = languages;

    vm.current = '';//$translate.storageKey();

    vm.changeLanguage = function (code) {
        $translate.use(code);
    };
}

SettingsLanguageCtrl.template = require('./../views/language.html');

SettingsLanguageCtrl.resolve = {};

module.exports = SettingsLanguageCtrl;
