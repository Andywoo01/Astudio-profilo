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

// Simple watch task: watches all CSS and JS files in the project
function watchFiles() {
    watch(['**/*.css'], function(cb) {
        console.log('A CSS file changed!');
        cb();
    });
    watch(['javascript/**/*.js'], minifyJs);
}

exports.minify = minifyJs;
exports.watch = watchFiles;
exports.default = watchFiles;
