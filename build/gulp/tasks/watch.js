'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');
var browserSync = require('browser-sync');
var config = require('../../config');
var _ = require('../util');
var watch = require('gulp-watch');

gulp.task('watch', function (done) {
    runSequence(
        'watch:set',
        'build',
        'watch:i18n',
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

gulp.task('watch:i18n', function () {
    var pattern = config.sources.i18n;
    gulp.src(pattern)
        .pipe(watch(config.sources.i18n, [{verbose: true}]))
        .pipe(gulp.dest('www/resources/i18n'));
});
