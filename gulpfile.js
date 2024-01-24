const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const purgecss = require("gulp-purgecss");
const minifyCss = require("gulp-clean-css");

function buildStyles() {
  return src("index.scss")
    .pipe(sass())
    .pipe(minifyCss())
    .pipe(purgecss({ content: ["*.html"] }))
    .pipe(dest("css"));
}

function watchTask() {
  watch(["*.scss", "*.html"], buildStyles);
}

exports.default = series(buildStyles, watchTask);
