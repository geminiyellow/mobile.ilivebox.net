'use strict';

var _ = require('lodash');
var path = require('path');
var base = require('../config').base;
var webpackConfig = require(path.join(base, 'build/webpack/webpack.config'));
var instrumenter = require('./test/instrumenter');

// Karma configuration
module.exports = function (config) {

    config.set({

        basePath: '',

        frameworks: ['jasmine'],
        browsers: ['PhantomJS'],

        colors: true,
        logLevel: config.LOG_INFO,

        port: 9876,
        captureTimeout: 60000,

        files: [
            './test/helpers.js',
            './spec/**/*.spec.js'
        ],

        preprocessors: {
            './spec/**/*.spec.js': [
                'webpack'
            ]
        },

        reporters: [
            'spec',
            'add-preloaded',
            'coverage'
        ],

        coverageReporter: {
            type: 'html',
            dir: path.join(base, 'release/coverage')
        },

        webpack: webpackConfig,

        webpackServer: {
            stats: {
                colors: true
            },
            quiet: true
        },

        plugins: [
            instrumenter.plugin({
                preloadSources: 'app'
            }),
            require('karma-webpack'),
            require('karma-coverage'),
            require('karma-jasmine'),
            require('karma-phantomjs-launcher'),
            require('karma-spec-reporter')
        ]

    });
};
