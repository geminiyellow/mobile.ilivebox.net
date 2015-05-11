'use strict';

var gulp = require('gulp');
var config = require('../../config');
var runSequence = require('run-sequence');
var _ = require('../util');

gulp.task('copy', function (done) {
    runSequence(
        'copy:i18n',
        _.runCallback(done)
    );
});

gulp.task('copy:i18n', function () {
    gulp.src(config.sources.i18n).pipe(gulp.dest('www/resources/i18n'));
});
