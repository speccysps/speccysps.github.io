const gulp = require('gulp'),
    watch = require('gulp-watch'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    cssvars = require('postcss-simple-vars'),
    nested = require('postcss-nested');

function start(done) {
    console.log("Hooray - you created a Gulp task.");
    done()
};
// end

function html(done) {
    console.log("Imagine something useful being done to your HTML here.");
    done()
};
// end

function styles(done) {
    return gulp.src('./assets/styles/main.css')
        .pipe(postcss([cssvars, nested, autoprefixer]))
        .pipe(gulp.dest('./temp/styles'))
    console.log("Temp folder created");
    done()
};
// end

function gulpwatch(done) {
    watch('./index.html', function () {
        gulp.start('html');
    });
    watch('./assets/styles/**/*.css', function () {
        gulp.start('styles');
    });
    done()
};

gulp.task('default', gulp.series(start, html, styles));
gulp.task('gulpwatch', gulpwatch);
