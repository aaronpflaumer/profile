// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

// Lint Task
gulp.task('lint', function() {
    return gulp.src('scripts/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// copy styling task
//
// copy scripts task
//
// lint function?
//
// lint task
//
// copy html task
//
// copy images task
//
// copy fonts task
//
// extras task?
//
// clean task
//
// serve task
//   watch task
//
// serve:dist task?
// serve:test task?
//
// wiredep task
