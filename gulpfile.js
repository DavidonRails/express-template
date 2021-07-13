const { src, dest, parallel } = require('gulp'),
    less = require('gulp-less'), 
    minifyCSS = require('gulp-csso'),
    concat = require('gulp-concat'),
    watch = require('gulp-watch')
    
var purify = require('gulp-purifycss');

gulp.task('css', function() {
  return gulp.src('./public/app/example.css')
    .pipe(purify(['./public/app/**/*.js', './public/**/*.html']))
    .pipe(gulp.dest('./dist/'));
});

function css() {
  return src('src/css/*.css')
    .pipe(minifyCSS())
    .pipe(dest('public/css'))
}

function js() {
  return src('src/js/*.js', { sourcemaps: true })
    .pipe(concat('script.min.js'))
    .pipe(dest('public/js', { sourcemaps: true }))
}

exports.js = js;
exports.css = css;
exports.default = parallel(css, js);