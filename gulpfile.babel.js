'use strict';

import gulp from 'gulp';
import mocha from 'gulp-mocha';

gulp.task('test', () => {
    gulp.src('tests/*.js', {read: false})
        .pipe(mocha({reporter: 'nyan'}))
});