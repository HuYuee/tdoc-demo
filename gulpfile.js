var gulp = require('gulp');
var tdoc = require('tdoc-cli');

gulp.task('tdoc', function() {
    return gulp.src('./')
        .pipe(tdoc({}));
});

//启动服务
gulp.task('default', ['tdoc']);
