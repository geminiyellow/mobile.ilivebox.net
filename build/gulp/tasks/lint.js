'use strict';

// gulp-plumber: Prevent pipe breaking caused by errors from gulp plugins
// gulp-jscs   : Check JavaScript code style with jscs
var gulp = require('gulp');
var gutil = require('gulp-util');
var runSequence = require('run-sequence');
var gulpif = require('gulp-if');
var plumber = require('gulp-plumber');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');
var notify = require('gulp-notify');
var config = require('../../config');
var _ = require('../util');

gulp.task('lint', function (done) {
    runSequence(
        'lint:jscs',
        'lint:jshint',
        _.runCallback(done)
    );
});

gulp.task('lint:jshint', function () {
    return gulp.src(config.sources.js)
        .pipe(plumber({
            errorHandler: notify.onError('<%= error.message %>')
        }))
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter('jshint-summary', {
            fileColCol: ',bold',
            positionCol: ',bold',
            codeCol: 'green,bold',
            reasonCol: 'cyan'
        }))
        .pipe(gulpif(!config.watch, jshint.reporter('fail')));
});

gulp.task('lint:jscs', function () {
    return gulp.src(config.sources.js)
        .pipe(plumber({
            errorHandler: notify.onError({
                message: '<%= options.strip(error.message) %>',
                templateOptions: {
                    strip: gutil.colors.stripColor
                }
            })
        }))
        .pipe(jscs('.jscsrc'));
});

gulp.task('lint:jscs:watch', function () {
    gulp.watch(config.sources.js, ['jscs']);
});
