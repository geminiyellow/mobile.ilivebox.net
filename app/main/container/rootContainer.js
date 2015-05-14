'use strict';

var RootIndexCtrl = require('./rootController');

module.exports = function RootContainer() {
    return {
        restrict: 'C',
        controllerAs: 'rootIndexCtrl',
        controller: RootIndexCtrl,
        template: require('./rootContainer.html')
    };
};
