'use strict';

var path = require('path');

module.exports = {
    base: process.cwd(),

    watch: false,

    // devtool: enables sources maps
    // eval - Each module is executed with eval and //@ sourceURL.
    // source-map - A SourceMap is emitted. See also output.sourceMapFilename.
    // hidden-source-map - Same as source-map, but doesn’t add a reference comment to the bundle.
    // inline-source-map - A SourceMap is added as DataUrl to the JavaScript file.
    // eval-source-map - Each module is executed with eval and a SourceMap is added as DataUrl to the eval.
    // devtool: '#inline-source-map',

    sources: {
        js: [
            '**/*.js',
            '!build/**',
            '!hooks/**',
            '!plugins/**',
            '!platforms/**',
            '!node_modules/**',
            '!bower_components/**',
            '!www/**',
            '!release/**'
        ],
        i18n: [
            'app/resources/i18n/**'
        ]
    }

};
