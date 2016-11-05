 // Coplest.Flinger
 // 0.0.1

console.log('\n\t\t\t== DevFest.IoT Raspberry Pi ==\n\n');

// =======================
// libraries =========
// =======================
var express         = require("express");
var app             = express();
var path            = require('path');
var http            = require('http').Server(app);
var io              = require("socket.io")(http);
var bodyParser      = require('body-parser');
var morgan          = require('morgan');
var mongoose        = require('mongoose');
var jwt             = require('jsonwebtoken'); // used to create, sign, and verify tokens
var checkInternet   = require('is-online');
var assert          = require('assert');
var mpromise        = require('mpromise');
var open            = require('open');
var colors          = require('colors/safe');
var cors            = require('cors');
var uuid            = require('node-uuid');
var SerialPort      = require("serialport");
var ioClient        = require('socket.io-client');

var dependencies = {
    express         : express,
    app             : app,
    path            : path,
    http            : http,
    io              : io,
    bodyParser      : bodyParser,
    morgan          : morgan,
    mongoose        : mongoose,
    jwt             : jwt,
    checkInternet   : checkInternet,
    assert          : assert,
    mpromise        : mpromise,
    colors          : colors,
    uuid            : uuid,
    serialport      : SerialPort,
    ioClient        : ioClient
}

console.log(dependencies.colors.green(' DevFest.PI: ') + 'Libs imported');

// =======================
// configuration =========
// =======================
var port = 3500;

var isOnline = true;

// use body parser so we can get info from POST and/or URL parameters
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(bodyParser.json()); // support json encoded bodies
app.use(cors());

// =======================
// initialize modules =========
// =======================
var devfestPI = require('./app/controllers/devfestController')(dependencies);

devfestPI.Initialize();

// =======================
// listening app =========
// =======================
io.listen(app.listen(port));
console.log(dependencies.colors.green(' DevFest.PI: ') + 'Listening on port ' + port);

// =======================
// launching app =========
// =======================
//open('http://localhost:' + port);