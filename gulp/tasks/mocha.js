'use strict';

var gulp = require('gulp');
var __paths = require('../paths.config');
var $ = require('gulp-load-plugins')();
var combine = require('stream-combiner2').obj;

gulp.task('mocha', function() {
  return combine(
    gulp.src(__paths.src.mocha, {
      read: false
    }),
    $.mocha({
      reporter: 'list'
    })
  ).on('error', $.notify.onError());

});