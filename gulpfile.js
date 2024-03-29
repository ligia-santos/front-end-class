const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();

function style() {
  return gulp
    .src('./**/*.scss')
    .pipe(concat('compiled.css'))
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css/'))
    .pipe(browserSync.stream());
}

function watch() {
  browserSync.init({
    server: {
      baseDir: './',
    },
  });
  gulp.watch('**/*.scss', style);
  gulp.watch('**/*.html').on('change', browserSync.reload);
  gulp.watch('**/*.js').on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;
