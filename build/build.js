require('./check-versions')()

process.env.NODE_ENV = 'production'

var ora = require('ora')
var rm = require('rimraf')
var path = require('path')
var fs = require('fs')
var chalk = require('chalk')
var webpack = require('webpack')
var config = require('../config')
var webpackConfig = require('./webpack.prod.conf')

var spinner = ora('building for production...')
spinner.start()

rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), err => {
  if (err) throw err
  webpack(webpackConfig, function (err, stats) {
    spinner.stop()
    if (err) throw err
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n\n')

    console.log(chalk.cyan('  Build complete.\n'))
    console.log(chalk.yellow(
      '  Tip: built files are meant to be served over an HTTP server.\n' +
      '  Opening index.html over file:// won\'t work.\n'
    ))

    var indexFilePath = path.join(__dirname, "../dist/index.html");
    if (fs.existsSync(indexFilePath)) {
      var filePath1 = path.join(__dirname, "../server/views/main-development.ejs");
      var filePath2 = path.join(__dirname, "../server/views/main-production.ejs");

      fs.readFile(indexFilePath, 'utf8', function (err, html) {
        console.log(html);
        var inject = '<script type="text/javascript">window.meta = <%- JSON.stringify(params.meta || {}) %>;window.session = <%- JSON.stringify(params.session || {}) %>;window.oauth = <%- JSON.stringify(params.oauth || {}) %>;</script>'
        html = html.replace('<title>app</title>', '<title>app</title>' + inject)
        fs.writeFile(filePath1, html, function (err) {
          if (err) {
            console.error('generate ejs file fail')
          } else {
            console.log(chalk.cyan('generate development ejs file success'))
          }
        })
        fs.writeFile(filePath2, html, function (err) {
          if (err) {
            console.error('generate ejs file fail')
          } else {
            console.log(chalk.cyan('generate production ejs file success'))
          }
        })
      })
    }
  })
})
