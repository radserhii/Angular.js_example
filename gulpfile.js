var gulp = require('gulp');
var connect = require('gulp-connect');
var stylus = require('gulp-stylus');
var nib = require('nib');

gulp.task('css', function() {
    gulp.src('src/*.styl')
        .pipe(stylus({
            use: nib()
        }))
        .pipe(gulp.dest('public/css/'))
        .pipe(connect.reload());
});

gulp.task('default', ['css']);