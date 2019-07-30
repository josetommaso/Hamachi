var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');

// compile scss into css

function style() {
    // 1. where is my scss file
    return gulp.src('src/scss/**/*.scss')
    // 2. pass that file through sass compiler
    .pipe(sass())
    // 3. where do i save the compiled CSS?
    .pipe(gulp.dest('src/css'))
    // 4. stream changes to all browser
    .pipe(browserSync.stream());
}

function js() {
    // Move files needed from node_modules to js directory
    return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js', 'node_modules/jquery/dist/jquery.min.js', 'node_modules/popper.js/dist/umd/popper.min.js', 'node_modules/bootstrap/dist/css/bootstrap.min.css'])
    .pipe(gulp.dest('src/js'))
    .pipe(browserSync.stream());
}

function bootstrap() {
    // Move files needed from node_modules to css directory
    return gulp.src('node_modules/bootstrap/dist/css/bootstrap.min.css')
    .pipe(gulp.dest('src/css'))
    .pipe(browserSync.stream());
}

function watch() { 
    browserSync.init({
        server: {
            baseDir: 'src/'
        }
    });

    gulp.watch('src/scss/**/*.scss', style);
    gulp.watch('src/*.html').on('change', browserSync.reload);
    gulp.watch('src/js/**/*.js').on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;
exports.js = js;
exports.bootstrap = bootstrap;