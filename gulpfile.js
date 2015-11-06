
var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var jade = require('gulp-jade');
var insert = require('gulp-insert');
var fs = require('fs');

gulp.task('jade', function() {
  var files = fs.readdirSync('jade/include');
  var include = [];
  var vars = jadeVars();
  var outputVars = '- var vars = ' + JSON.stringify(vars) + ';\n';

  for (var index in files) {
    include.push('include ./include/' + files[index]);
  }
  for (var index in vars.projects) {
    include.push('include ' + vars.projects[index].path);
  }
  return gulp.src('jade/*.jade')
    .pipe(insert.prepend(include.join('\n') + '\n' + outputVars))
    .pipe(jade())
    .pipe(gulp.dest('./'));
});

gulp.task('sass', function() {
  return gulp.src('sass/*.sass')
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(gulp.dest('css'));
});

gulp.task('watch', ['jade', 'sass'], function() {
  gulp.watch('jade/**/*.jade', ['jade']);
  gulp.watch('sass/*.sass', ['sass']);
});

gulp.task('default', ['watch']);

function jadeVars() {
  var vars = {
    styles: [],
    scripts: [],
    projects: [],
  };
  var css = fs.readdirSync('css');
  var js = fs.readdirSync('js');
  var projects = fs.readdirSync('jade/projects');

  for (var index in css) {
    vars.styles.push('css/' + css[index]);
  }
  for (var index in js) {
    vars.scripts.push('js/' + js[index]);
  }
  for (var index in projects) {
    var name = projects[index].split('.');
    vars.projects.push({
      name: name[0],
      path: 'projects/' + projects[index],
    });
  }

  return vars;
}