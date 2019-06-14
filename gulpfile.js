const gulp = require('gulp');
const fs = require('fs');
const packageJson = require('./package');

gulp.task('set:config', done => {
  console.log(`${process.env.CONFIG}`);
  // eslint-disable-next-line
  const config = require(`./config/${process.env.CONFIG}.json`);
  config.version = packageJson.version;
  console.log(config);
  const fileData = `window.env = ${JSON.stringify(config, null, 2)};`;
  fs.writeFile('./public/js/config.js', fileData, done);
  done();
});

gulp.task('default', gulp.series('set:config'));
