'use strict';

module.exports = function $exceptionHandler() {

    return function (exception) {
        throw exception;
    };

};
