'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');
var _ = require('../util');

gulp.task('default', function (done) {
    runSequence(
        'clean',
        'lint',
        'test',
        'build',
        _.runCallback(done)
    );
});
