var gulp = require('gulp'),
    gulpwatch = require('gulp-watch'),
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
    gulpwatch('./index.html', function () {
        gulp.series('html', html);
    });
    // end
    gulpwatch('./assets/styles/**/*.css', function () {
        gulp.series('styles', styles);
    });
    // end
    done()
};

gulp.task('default', gulp.series(start, html, styles, gulpwatch));
// gulp.task('gulpwatch', gulpwatch);
