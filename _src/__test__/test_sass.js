var path = require('path');
var sassTrue = require('sass-true');

var firstTest = path.join(__dirname, 'test.scss');
sassTrue.runSass({file: firstTest}, describe, it);