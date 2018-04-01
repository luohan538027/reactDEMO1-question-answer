
var gulp = require('gulp');
var connect = require('gulp-connect');
var concat = require('gulp-concat');
var browserify =  require('gulp-browserify');
var port = process.env.port || 5000;



gulp.task('browserify',function () {

    gulp.src('./app/js/main.js')
    .pipe(browserify({
        transform:'reactify',
    }))
    .pipe(gulp.dest('./dist/js'))
    
});


gulp.task('connect',function () {
    connect.server({
        root:'./',
        port:port,
        liveReload:true,
    })
}
)


gulp.task('rejs',function () {
    gulp.src('./dist/**/*.js')
    .pipe(connect.reload())
    
});


gulp.task('rehtml',function () {
    gulp.src('./app/**/*.html')
    .pipe(connect.reload())
    
});


gulp.task('watch',function(){
    gulp.watch('./dist/**/*.js',['rejs']);
    gulp.watch('./app/**/*.html',['rehtml']);
    gulp.watch('./app/js/**/*.js',['browserify']);

});


gulp.task('default',['browserify']);


gulp.task('serve',['browserify','connect','watch']);