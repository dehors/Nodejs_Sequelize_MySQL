// BASE SETUP
// =============================================================================
var express = require('express'),
bodyParser = require('body-parser');

var app = express();
app.use(bodyParser());

var env = app.get('env') == 'development' ? 'dev' : app.get('env');
var port = process.env.PORT || 3000;

var router = require('./routes.js');
app.use('/', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);