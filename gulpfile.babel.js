'use strict';

import gulp from 'gulp';
import mocha from 'gulp-mocha';
import env from 'gulp-env';
import supertest from 'supertest';

gulp.task('test', () => {
    env({vars: {
        ENV: 'test'
    }});

    gulp.src('tests/*.js', {read: false})
        .pipe(mocha({reporter: 'nyan'}))
});