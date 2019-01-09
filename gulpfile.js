/* global require, console */

const gulp = require('gulp');
const del = require('del');
const less = require('gulp-less');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const webpack = require('webpack-stream');
const eslint = require('gulp-eslint');
const babel = require("gulp-babel");
const path = require("path");
const uglify = require('gulp-uglify');
const harp = require('harp');
const copy = require('gulp-copy');
const runSequence = require('run-sequence');
const csso = require('gulp-csso');

gulp.task('clean', function () {
    return del([
        'build',
        'css/style.css',
        'js/App.js'
    ]);
});

gulp.task('css', [], function () {
    return gulp
        .src([
            'css/style.less'
        ])
        .pipe(less())
        .pipe(concat('style.css'))
        .pipe(autoprefixer({
            browsers: [
                'Explorer >= 10',
                'iOS >= 3',
                'Android >= 2',
                'Firefox ESR',
                'last 5 versions'
            ],
            cascade: false
        }))
        .pipe(csso())
        .pipe(gulp.dest('build/css'));
});

gulp.task('webpack', function() {
    return gulp
        .src('js/Entry.js')
        .pipe(webpack(Object.assign({
            output: {
                filename: 'App.js'
            }
        })))
        .pipe(babel())
        .pipe(uglify())
        .pipe(gulp.dest('js'));
});

gulp.task('watch-webpack', function() {
    return gulp
        .src('js/Entry.js')
        .pipe(webpack(Object.assign({
            watch: true,
            output: {
                filename: 'App.js'
            }
        })))
        .pipe(babel())
        .pipe(gulp.dest('js'));
});

gulp.task('watch', [], function() {
    harp.server(__dirname, {
        port: 9000
    }, function () {
        console.log('Server running on http://localhost:9000/');
        gulp.start('watch-webpack');
    });
});

gulp.task('copy', function() {
    return gulp
        .src([
            '!node_modules/**/*.*',
            './**/*.ejs',
            './fonts/*.*',
            './img/**/*.*',
            './js/App.js',
            './_data.json',
            './_harp.json',
            './favicon.png'
        ])
        .pipe(copy('build'));
});

gulp.task('default', function () {
    runSequence('clean', 'copy', 'css', function() {
        harp.compile('./build', '../www', function () {
            console.log('Build complete!');
        });
    });
});