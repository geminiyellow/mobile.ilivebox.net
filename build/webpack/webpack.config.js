'use strict';

// html-webpack-plugin: Simplifies creation of HTML files to serve your webpack bundles
// ng-annotate-webpack-plugin: webpack plugin that runs ng-annotate on your bundles
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var NGAnnotatePlugin = require('ng-annotate-webpack-plugin');

var config = require('../config');

module.exports = {

    cache: true,
    debug: true,

    entry: {
        index: path.join(config.base, 'app/index')
    },

    output: {
        path: path.join(config.base, 'www'),
        filename: '[name].js',
        chunkFilename: '[chunkhash].js'
    },

    module: {

        loaders: [{
            test: /\.css$/,
            loader: 'style!css'
        }, {
            test: /\.html$/,
            loader: 'html'
        }, {
            test: /\.json$/,
            loader: 'json'
        }, {
            test: /\.scss$/,
            loader: 'style!css!sass?outputStyle=expanded'
        }, {
            test: /\.woff/,
            loader: 'url?prefix=font/&limit=10000&mimetype=application/font-woff'
        }, {
            test: /\.ttf/,
            loader: 'file?prefix=font/'
        }, {
            test: /\.eot/,
            loader: 'file?prefix=font/'
        }, {
            test: /\.svg/,
            loader: 'file?prefix=font/'
        }, {
            test: /[\/]angular\.js$/,
            loader: 'exports?angular'
        }, {
            test: /[\/]ionic\.js$/,
            loader: 'exports?ionic'
        }],

        // NOTE: this helps build speed on larger libraries that do not use commonjs
        noParse: [
            /bower_components/
        ]
    },

    resolve: {
        root: [
            path.join(__dirname, 'app'),
            path.join(__dirname, 'bower_components'),
            path.join(__dirname, 'node_modules')
        ],
        moduleDirectories: [
            'bower_components',
            'node_modules'
        ],
        alias: {}
    },

    //amd: {
    //    pouchdb: true
    //},

    plugins: [
        new webpack.ResolverPlugin(
            new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin(
                'bower.json', ['main'])
        ),
        new NGAnnotatePlugin({
            add: true
        }),
        new webpack.optimize.DedupePlugin(),
        new HtmlWebpackPlugin({
            pkg: require(path.join(config.base, 'package.json')),
            template: 'app/entry-template.html'
        })
        // new webpack.optimize.UglifyJsPlugin({
        //   mangle:true,
        //   compress:{
        //     drop_console:true
        //   },
        //   output: {
        //     comments: false
        //   }
        // }),
        // new webpack.optimize.OccurenceOrderPlugin(true)
        // new webpack.BannerPlugin(banner, options),
        // new webpack.optimize.DedupePlugin()
    ]
};
