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
        .pipe(gulp.dest('./src/css'))
        // ? 4. stream changes to all browser (browserSync) 
        .pipe(browserSync.stream());
}

// ! Move jquery into src folder
function jquery() {
    // ? 1. where is my jquery.min.js file
    return gulp.src('./node_modules/jquery/dist/jquery.min.js')
        // ? 2. where do I move the jquery file
        .pipe(gulp.dest('./src/js'))
}

// ! Move bootstrap into src folder
function bootstrap() {
    // ? 1. where is my bootstrap.min.js file
    return gulp.src('./node_modules/bootstrap/dist/js/bootstrap.min.js')
        // ? 2. where do I move the jquery file
        .pipe(gulp.dest('./src/js'))
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
    gulp.watch('./js/**/*.js').on('change', browserSync.reload);
}

exports.style = style;
exports.jquery = jquery;
exports.bootstrap = bootstrap;
exports.watch = watch;

// * Default
const build = gulp.series(jquery, bootstrap, watch);
exports.default = build;
