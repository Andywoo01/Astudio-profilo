const { src, dest, watch } = require('gulp');
const minify = require('gulp-minify');
const plumber = require('gulp-plumber');

// Minify JS files
function minifyJs() {
    return src('javascript/**/*.js')
        .pipe(plumber())
        .pipe(minify({
            ext: {
                min: '.min.js'
            },
            noSource: true
        }))
        .pipe(dest('dist/js'));
}

// Dummy image copy task (replace with your real task if needed)
function copyImages(cb) {
    console.log('Image file changed!');
    cb();
}

// Simple watch task: watches all CSS, JS, and image files in the project
function watchFiles() {
    watch(['**/*.css'], function(cb) {
        console.log('A CSS file changed!');
        cb();
    });
    watch(['javascript/**/*.js'], minifyJs);
    watch(['images/**/*'], minifyJs);
    watch(['contact/**/*'], minifyJs);
    watch(['about/**/*'], minifyJs);

}

exports.minify = minifyJs;
exports.watch = watchFiles;
exports.default = watchFiles;
