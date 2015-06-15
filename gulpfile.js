var gulp   = require('gulp');
var sass   = require('gulp-ruby-sass');
var concat = require('gulp-concat');
var uglify = require("gulp-uglify");

var config = {
  sassPath: './src/assets/scss',
  imgPath: './src/assets/img',
  bowerDir: './src/assets/bower',
  publicDir: './public',
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

gulp.task('css', function() {
  return sass(config.sassPath +  '/app/style.scss', {
      sourcemap: false,
      style: "compressed",
      loadPath: [
        config.sassPath + '/app',
        config.bowerDir + '/bootstrap-sass-official/assets/stylesheets',
        config.bowerDir + '/fontawesome/scss',
      ]
    })
    .on('error', function (err) {
      console.error('Error!', err.message);
    })
    .pipe(gulp.dest(config.publicDir + '/css'));
});

gulp.task('testcss', function() {
  return sass(config.sassPath +  '/test/style.scss', {
      sourcemap: false,
      style: "compressed",
      loadPath: [
        config.sassPath + '/test',
        config.bowerDir + '/bootstrap-sass-official/assets/stylesheets',
        config.bowerDir + '/fontawesome/scss',
      ]
    })
    .on('error', function (err) {
      console.error('Error!', err.message);
    })
    .pipe(concat('test.css'))
    .pipe(gulp.dest(config.publicDir + '/css'));
});

gulp.task('scripts', function(){  
  return gulp.src([
      config.bowerDir + '/jquery/dist/jquery.js',
      config.bowerDir +'/bootstrap-sass-official/assets/javascripts/bootstrap.js',
      './app/assets/js/script.js',
    ])
    .pipe(concat('app.js'))
    .pipe(uglify())
    .pipe(gulp.dest(config.publicDir + '/js/'));
});

// Rerun the task when a file changes
gulp.task('watch', function() {
  gulp.watch(config.sassPath + '/app/**/**/*.scss', ['css']);
  gulp.watch(config.sassPath + '/test/**/**/*.scss', ['testcss']);
  gulp.watch(config.imgPath + '/**/*.*', ['img']);
});


gulp.task('default', ['fonts', 'icons', 'img', 'css', 'scripts']);
