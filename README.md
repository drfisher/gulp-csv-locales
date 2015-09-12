# grunt-csv-locales

This is a gulp task for the [csv-locales module](https://www.npmjs.com/package/csv-locales) which creates json files with [i18n locales](https://developer.chrome.com/extensions/i18n) for Google Chrome extensions and applications from a CSV file.


## Installation

    npm install --save-dev gulp-csv-locales


## Usage

To create locales use a CSV file which generated from a spreadsheet with [this structure](https://docs.google.com/spreadsheets/d/1ONVyE5iwe7Hjg74eUQ5WdJjQ7i8kWNcbfXI-uh3bvdc/edit?usp=sharing).

    var csvLocales = require('gulp-csv-locales');
    
    gulp.task('csvLocales', function () {
      return csvLocales({
        csvPath: 'tmp/locales.csv',
        dirPath: 'tmp/_locales',
        csvParse: {}
      });
    });


### Params available

* `csvPath` - a path to the CSV file with locales.
* `dirPath` - a path to the target directory. If it doesn't exist, it will be created.
* `csvParse` — a list of options for the [CSV parser](http://csv.adaltas.com/parse/).


License
-------

[MIT](LICENSE)
