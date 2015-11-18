var gulp   = require('gulp');
var sass   = require('gulp-ruby-sass');
var concat = require('gulp-concat');
var uglify = require("gulp-uglify");

var config = {
  sassPath: './src/assets/scss',
  imgPath: './src/assets/img',
  rootPath: './src/assets',
  bowerDir: './src/assets/bower',
  scriptPath: './src/assets/js',
  publicDir: `./${process.env.PATH_GULP || 'public'}`,
}

gulp.task('icons', function() {
  return gulp.src(config.bowerDir + '/fontawesome/fonts/**/**.*')
    .pipe(gulp.dest(config.publicDir + '/fonts'));
});

gulp.task('fonts', function() {
  return gulp.src(config.bowerDir + '/bootstrap-sass-official/assets/fonts/**/**.*')
    .pipe(gulp.dest(config.publicDir + '/fonts'));
});

gulp.task('img', function() {
  return gulp.src(config.imgPath + '/**/**.*')
    .pipe(gulp.dest(config.publicDir + '/img'));
});

gulp.task('favicon', function() {
  return gulp.src(config.rootPath + '/favicon.ico')
    .pipe(gulp.dest(config.publicDir + '/'));
});

gulp.task('css', function() {
  return sass(config.sassPath +  '/style.scss', {
      sourcemap: false,
      style: "compressed",
      // compass:true,
      loadPath: [
        config.sassPath,
        config.bowerDir + '/bootstrap-4.0.0-alpha/scss',
        config.bowerDir + '/fontawesome/scss',
      ]
    })
    .on('error', function (err) {
      console.error('Error!', err.message);
    })
    .pipe(gulp.dest(config.publicDir + '/css'));
});

gulp.task('scripts', function(){
  return gulp.src([
      config.bowerDir + '/jquery/dist/jquery.js',
      config.bowerDir +'/bootstrap-4.0.0-alpha/dist/js/bootstrap.js',
      config.scriptPath + '/script.js',
    ])
    .pipe(concat('script.js'))
    .pipe(uglify())
    .pipe(gulp.dest(config.publicDir + '/js/'));
});

// Rerun the task when a file changes
gulp.task('watch', function() {
  gulp.watch(config.sassPath + '/**/**/*.scss', ['css']);
  gulp.watch(config.imgPath + '/**/*.*', ['img']);
  gulp.watch(config.scriptPath + '/**/*.*', ['scripts']);
});


gulp.task('default', ['fonts', 'icons', 'img', 'favicon', 'css', 'scripts']);
