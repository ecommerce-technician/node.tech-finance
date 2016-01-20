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
    gulp.src([
        './node_modules/angular-material/angular-material.scss',
        './assets/css/*.css',
        './bower_components/nvd3/build/nv.d3.css'
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
        './bower_components/angular/angular.js',
        './bower_components/angular-ui-router/release/angular-ui-router.js',
        './bower_components/angular-resource/angular-resource.js',
        './bower_components/angular-material/angular-material.js',
        './bower_components/angular-animate/angular-animate.js',
        './bower_components/angular-aria/angular-aria.js',
        './bower_components/angular-messages/angular-messages.js',
        './bower_components/angular-cookies/angular-cookies.js',
        './nodeTechApp/app.js',
        './nodeTechApp/routes.js',
        './nodeTechApp/services/*.js',
        './nodeTechApp/root-controller.js',
        './bower_components/d3/d3.js',
        './bower_components/nvd3/build/nv.d3.js',
        './bower_components/angular-nvd3/dist/angular-nvd3.js',
        './nodeTechApp/index-controller.js'
    ])
        .pipe(concat('main.js'))
        .pipe(gulp.dest('./public/js/'));
});

/*compress js*/
gulp.task('compress', function(){
    gulp.src('./public/js/*.js')
        .pipe(ngAnnotate())
        .pipe(uglify())
        .pipe(gulp.dest('./public/js/'));
});
