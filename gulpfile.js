/**
 * Created by alex on 9/12/15.
 */
var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uncss = require('gulp-uncss');

/*compile sass and css*/
gulp.task('sass', function () {
    gulp.src(['./node_modules/angular-material/angular-material.scss',
        './assets/css/*.css'
    ])
        .pipe(sass({
            includePaths: require('node-bourbon').includePaths
        }))
        .pipe(concat('main.css'))
        .pipe(gulp.dest('public/css/'));
});

/*concatenate js*/
gulp.task('scripts', function() {
    gulp.src([
        './node_modules/angular/angular.js',
        './node_modules/angular-resource/angular-resource.js',
        './node_modules/angular-route/angular-route.js',
        './node_modules/angular-material/angular-material.js',
        './node_modules/angular-animate/angular-animate.js',
        './node_modules/angular-aria/angular-aria.js',
        './node_modules/angular-messages/angular-messages.js',
        './node_modules/angular-cookies/angular-cookies.js',
        './assets/js/app.js',
        './assets/js/routes.js',
        './assets/js/index-controller.js',

    ])
        .pipe(concat('main.js'))
        .pipe(gulp.dest('./public/js/'));

    /*gulp.src(['./assets/js/issues/main.js'])
        .pipe(concat('main.js'))
        .pipe(gulp.dest('./public/js/issues/'));*/
});

/*compress js*/
gulp.task('compress', function(){
    gulp.src('./public/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./public/js/'));
});
