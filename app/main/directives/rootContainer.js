'use strict';

var RootIndexCtrl = require('./../controllers/index');

module.exports = function RootContainer() {
    return {
        restrict: 'C',
        controllerAs: 'rootIndexCtrl',
        controller: RootIndexCtrl,
        template: require('./rootContainer.html')
    };
};
