const gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync').create();

// ! compile scss into css
function style() {
    // ? 1. where is my scss file
    return gulp.src('./_scss/**/*.scss')
    // ? 2. pass that file through sass compiler
    .pipe(sass().on('error', sass.logError))
    // ? 3. where do I save the complied css?
    .pipe(gulp.dest('./assets/css'))
    // ? 4. stream changes to all browser (browserSync) 
    .pipe(browserSync.stream());
}

// ! watch files & folders
function watch() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
    // ? watch the css folder and perform the 'style' function defined above
    gulp.watch('./_scss/**/*.scss', style);
    // ? watch the html file and reload the page when changes detected
    gulp.watch('./*.html').on('change', browserSync.reload);
    // ? watch the js folder and reload the page when changes detected
    gulp.watch('./_js/**/*.js').on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;