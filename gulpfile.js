const {src, dest, parallel, watch } = require('gulp');

const browserSync = require('browser-sync').create();

function browsersync() {
	browserSync.init({
		server: { baseDir: 'app/' }

	})

}

exports.browsersync=browsersync;