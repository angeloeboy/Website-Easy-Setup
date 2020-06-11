const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();


function style(){

    return gulp.src('./scss/**/*.sass')

    .pipe(sass())

    .pipe(gulp.dest('./css'))

    .pipe(browserSync.stream());
}


function watch(){
    browserSync.init({
        server: {
            baseDir: './'
        }
    });

    gulp.watch('./scss/**/*.sass', style);
    gulp.watch('./*.html').on('change', browserSync.reload);
    gulp.watch('./js/**/*.js').on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;