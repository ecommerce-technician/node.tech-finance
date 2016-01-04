/**
 * Created by alex on 9/12/15.
 */
var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uncss = require('gulp-uncss');
var ngAnnotate = require('gulp-ng-annotate');

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
        './bower_components/angular-ui-router/release/angular-ui-router.js',
        './node_modules/angular-resource/angular-resource.js',
        './bower_components/angular-material/angular-material.js',
        './node_modules/angular-animate/angular-animate.js',
        './node_modules/angular-aria/angular-aria.js',
        './node_modules/angular-messages/angular-messages.js',
        './node_modules/angular-cookies/angular-cookies.js',
        './vendor/angular-google-chart/ng-google-chart.js',
        './nodeTechApp/app.js',
        './nodeTechApp/routes.js',
        './nodeTechApp/services/*.js',
        './nodeTechApp/root-controller.js',
        './nodeTechApp/index-controller.js'
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
        .pipe(ngAnnotate())
        .pipe(uglify())
        .pipe(gulp.dest('./public/js/'));
});
