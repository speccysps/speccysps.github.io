const gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync').create();

// ! compile scss into css
function style() {
    // 1. where is my scss file
    return gulp.src('./_scss/**/*.scss')
    // 2. pass that file through sass compiler
    .pipe(sass())
    // 3. where do I save the complied css?
    .pipe(gulp.dest('./assets/css'))
}

exports.style = style;