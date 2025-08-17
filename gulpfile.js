const { src, dest, watch, series, parallel } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const imagemin = require('gulp-imagemin');

// Copy HTML files
function copyHtml() {
    return src('src/**/*.html')
        .pipe(dest('dist'));
}

// Compile Sass to CSS
function compileSass() {
    return src('src/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(dest('dist/css'));
}

// Minify CSS
function minifyCss() {
    return src('dist/css/**/*.css')
        .pipe(cleanCSS())
        .pipe(dest('dist/css'));
}

// Optimize Images
function optimizeImages() {
    return src('src/images/**/*')
        .pipe(imagemin())
        .pipe(dest('dist/images'));
}

// Watch files
function watchFiles() {
    watch('src/**/*.html', copyHtml);
    watch('src/scss/**/*.scss', series(compileSass, minifyCss));
    watch('src/images/**/*', optimizeImages);
}

exports.copyHtml = copyHtml;
exports.compileSass = compileSass;
exports.minifyCss = minifyCss;
exports.optimizeImages = optimizeImages;
exports.watch = watchFiles;
exports.default = series(
    parallel(copyHtml, series(compileSass, minifyCss), optimizeImages),
    watchFiles
);

