const { watch } = require('gulp');

// Simple watch task: watches all CSS and JS files in the project
function watchFiles() {
    watch(['**/*.css', '**/*.js'], function(cb) {
        console.log('A CSS or JS file changed!');
        cb();
    });
}

exports.watch = watchFiles;
exports.default = watchFiles;

gulp watch
