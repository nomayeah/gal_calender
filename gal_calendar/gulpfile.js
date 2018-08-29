var gulp = require("gulp");
var babel = require("gulp-babel");


gulp.task('babel', function() {
  gulp.src('./*.es6')
    .pipe(babel())
    .pipe(gulp.dest('./'))
});

gulp.task('watch', function() {
  gulp.watch('./*.es6', ['babel'])
});

gulp.task('default', ['babel', 'watch']);

var sass = require("gulp-sass");
gulp.task("sass", function() {
    gulp.src("sass/**/*scss")
        .pipe(sass())
        .pipe(gulp.dest("./css"));
});
