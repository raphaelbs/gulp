// Include gulp
var gulp = require('gulp');
 // Define base folders
var src = 'src/';
var dest = 'build/';
 // Include plugins
var plugins = require("gulp-load-plugins")({
  pattern: ['gulp-*', 'gulp.*', 'main-bower-files'],
  replaceString: /\bgulp[\-.]/
});
 // Concatenate & Minify JS
gulp.task('js', function() {
 	var jsFiles = ['src/js/*'];
 	gulp.src(plugins.mainBowerFiles().concat(jsFiles))
 		.pipe(plugins.filter('*.js'))
 		.pipe(plugins.concat('main.js'))
 		.pipe(plugins.uglify())
 		.pipe(gulp.dest(dest + 'js'));
 });
 // Compile CSS from Sass files

 // Watch for changes in files
gulp.task('watch', function() {
   // Watch .js files
  gulp.watch(src + 'js/*.js', ['scripts']);
 });
 // Default Task
gulp.task('default', ['scripts', 'watch']);
