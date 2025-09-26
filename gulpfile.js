const { src, dest, watch, series, parallel } = require('gulp');
const minify = require('gulp-minify');
const plumber = require('gulp-plumber');
const browserSync = require('browser-sync').create();

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
        .pipe(dest('dist/js'))
        .pipe(browserSync.stream());
}

// Dummy image copy task (replace with your real task if needed)
function copyImages(cb) {
    console.log('Image file changed!');
    cb();
}

// Serve and reload with BrowserSync
function serve(cb) {
    browserSync.init({
        server: {
            baseDir: './'
        },
        port: 3000,
        startPath: 'homepage.html'
    });
    cb();
}

// Watch files and reload browser on changes
function watchFiles() {
    watch(['**/*.css']).on('change', browserSync.reload);
    watch(['javascript/**/*.js'], minifyJs);
    watch(['images/**/*'], browserSync.reload);
    watch(['contact/**/*'], browserSync.reload);
    watch(['about/**/*'], browserSync.reload);
    watch(['*.html'], browserSync.reload);
}

exports.minify = minifyJs;
exports.serve = serve;
exports.watch = series(serve, watchFiles);
exports.default = series(serve, watchFiles);
