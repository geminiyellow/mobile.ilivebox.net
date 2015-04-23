'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');
var karma = require('karma').server;
var path = require('path');
var config = require('../../config');
var _ = require('../util');

gulp.task('test', function (done) {
    runSequence(
        'test:karma',
        _.runCallback(done)
    );
});

gulp.task('test:karma', function (done) {
    karma.start({
        configFile: path.join(config.base, 'build/karma/karma.config.js'),
        singleRun: !config.watch,
        autoWatch: config.watch

    }, function (exitCode) {
        if (exitCode !== 0) {
            return process.exit(exitCode);
        }

        done();
    });
});
