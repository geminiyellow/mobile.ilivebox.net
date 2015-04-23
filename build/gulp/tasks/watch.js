'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');
var browserSync = require('browser-sync');
var config = require('../../config');
var _ = require('../util');

gulp.task('watch', function (done) {
    runSequence(
        'watch:set',
        'build',
        'watch:browser-sync',
        //'test',
        _.runCallback(done)
    );
});

gulp.task('watch:set', function () {
    config.watch = true;
});

gulp.task('watch:browser-sync', function () {
    browserSync({
        files: [
            'www/**'
        ],
        server: {
            baseDir: ['www'],
            index: 'index.html'
        }
    });
});
