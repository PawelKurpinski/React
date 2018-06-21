var gulp = require( 'gulp' );
var watch = require( 'gulp-watch' );
var sass =require( 'gulp-sass' );

//komilacja pliku sass na css. przyjmuje tablice, ktora nam okresla, czy ta wtyczka ma kompresowac czy cos innego
gulp.task( 'sass', function(){
  return gulp.src( 'scss/main.scss' )
  .pipe( sass().on('error', sass.logError) ) //zeby watch sie nie wywalal po errorze
  .pipe( sass() )
  .pipe( gulp.dest( 'css' ) )
});

gulp.task( 'watch', function(){
  gulp.watch( 'scss/**/*.scss', ['sass'] );
});
