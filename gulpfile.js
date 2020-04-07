const gulp = require("gulp");
const sass = require("gulp-sass");
const concat = require("gulp-concat");
const livereload = require("gulp-livereload");
const plumber = require("gulp-plumber");
const uglify = require("gulp-uglify");
const autoprefixer = require("gulp-autoprefixer");
const sourcemaps = require("gulp-sourcemaps");
const rename = require("gulp-rename");

gulp.task("default", gulp.parallel(scripts, vendorScripts, stylesheets));

gulp.task(
  "dev",
  gulp.series(gulp.parallel(scripts, vendorScripts, stylesheets), watch)
);

// Watch File Changes
function watch() {
  livereload.listen();
  gulp.watch("client/**/*.js", scripts);
  gulp.watch("client/stylesheets/**/*.scss", stylesheets);
}

// Compile Stylesheets
function stylesheets() {
  return gulp
    .src("client/stylesheets/app.scss")
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(
      sass({
        onError: function (e) {
          console.error(e);
        },
        outputStyle: "compressed",
      })
    )
    .pipe(autoprefixer())
    .pipe(rename("app.min.css"))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("public/stylesheets"))
    .pipe(livereload());
}

// Vendor Scripts
function vendorScripts() {
  return gulp
    .src([
      "node_modules/angular/angular.js",
      "node_modules/angular-resource/angular-resource.js",
      "node_modules/@uirouter/angularjs/release/angular-ui-router.js",
    ])
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(concat("vendor.min.js"))
    .pipe(uglify())
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("public/javascripts"))
    .pipe(livereload());
}

// Compile Scripts
function scripts() {
  return (
    gulp
      .src([
        "client/app.js",
        "client/scripts/filters/**/*",
        "client/scripts/services/**/*",
        "client/scripts/directives/**/*",
        "client/scripts/components/**/*",
      ])
      .pipe(plumber())
      .pipe(sourcemaps.init())
      .pipe(concat("app.min.js"))
      // .pipe(uglify())
      .pipe(sourcemaps.write("."))
      .pipe(gulp.dest("public/javascripts"))
      .pipe(livereload())
  );
}
