'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');
var browserSync = require('browser-sync');
var runSequence = require('run-sequence');
var webpack = require('webpack');
var webpackConfig = require('../../webpack/webpack.config');
var config = require('../../config');
var _ = require('../util');

gulp.task('build', function (done) {
    runSequence(
        'build:webpack',
        _.runCallback(done)
    );
});

gulp.task('build:webpack', function (done) {
    //if (config.devtool) {
    //    webpackConfig.devtool = config.devtool;
    //}
    var started = false;
    var bundler = webpack(webpackConfig);

    function bundle(err, stats) {
        if (err) {
            throw new gutil.PluginError('build:webpack', err);
        }

        gutil.log('[build:webpack]', stats.toString({
            colors: true
        }));

        if (config.watch) {
            browserSync.reload(webpackConfig.output.filename);
        }

        if (!started) {
            started = true;
            return done();
        }
    }

    if (config.watch) {
        bundler.watch(200, bundle);

    } else {
        bundler.run(bundle);
    }
});
