/* global require, console */

// const gulp = require('gulp');
const { src, dest, series } = require('gulp');
const del = require('del');
const less = require('gulp-less');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const webpack = require('webpack-stream');
const babel = require("gulp-babel");
const uglify = require('gulp-uglify');
const harp = require('harp');
const copy = require('gulp-copy');
const runSequence = require('run-sequence');
const csso = require('gulp-csso');

function clean(cb) {
    return del([
        'build',
        'css/style.css',
        'js/App.js'
    ]);
}

function css() {
    return src([
            'css/style.less'
        ])
        .pipe(less())
        .pipe(concat('style.css'))
        .pipe(autoprefixer())
        .pipe(csso())
        .pipe(dest('build/css'));
}

function webpackTask() {
    return src('js/entry.js')
        .pipe(webpack(Object.assign({
            output: {
                filename: 'App.js'
            }
        })))
        .pipe(babel())
        .pipe(uglify())
        .pipe(dest('js'));
}

function watchWebpack() {
    return src('js/entry.js')
        .pipe(webpack(Object.assign({
            watch: true,
            output: {
                filename: 'App.js'
            }
        })))
        .pipe(babel())
        .pipe(dest('js'));
}

function copyTask() {
    return src([
        '!node_modules/**/*.*',
        './**/*.ejs',
        './fonts/*.*',
        './img/**/*.*',
        './js/App.js',
        './_data.json',
        './_harp.json'
    ])
    .pipe(copy('build'));
}

function watch(cb) {
    harp.server(__dirname, {
        port: 9000
    }, function () {
        console.log('Server running on http://localhost:9000/');
        watchWebpack();
        cb();
    });
}

function compile(cb) {
    harp.compile('./build', '../www', function () {
        console.log('Build complete!');
        cb();
    });
}

exports.watch = series(clean, watch);
exports.default = series(clean, webpackTask, copyTask, css, compile);
