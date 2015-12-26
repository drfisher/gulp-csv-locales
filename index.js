'use strict';

var csvLocales = require('csv-locales');
var path = require('path');

module.exports = function (options) {
  var processDir = process.cwd();
  var dirPath = path.join(processDir, options.dirPath, path.sep);
  var params = {
    csvPath: path.join(processDir, options.csvPath),
    dirPath: dirPath,
    csvParse: options.csvParse || {},
    debug: !!options.debug
  };

  return new Promise(function (resolve, reject) {
    csvLocales(params, function (err) {
      if (err) {
        reject(err);
      }
      resolve();
    });
  });
};
