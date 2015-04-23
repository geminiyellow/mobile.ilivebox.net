'use strict';

var fs = require('fs');
var path = require('path');
var notify = require('gulp-notify');

notify.logLevel(0);

fs.readdirSync('./build/gulp/tasks/')
    .filter(function (name) {
        return /(\.(js)$)/i.test(path.extname(name));
    })
    .forEach(function (task) {
        require(path.resolve('./build/gulp/tasks/', task));
    });
