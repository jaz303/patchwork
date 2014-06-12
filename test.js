var fs = require('fs');
var parser = require('./lib/parser');

var src = fs.readFileSync('test.pw', 'utf8');

parser.parse(src, {start: 'Program'});