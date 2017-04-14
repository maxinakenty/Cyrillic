'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

gulp.task('mocha', function() {
  return gulp.src(['__test__/*.scss'], {
      read: false
    })
    .pipe($.mocha({
      reporter: 'list'
    }))
    .on('error', $.gutil.log);
});