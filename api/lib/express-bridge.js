var express = require("express");
var logger = require("morgan");
var errorHandler = require("errorhandler");

var ExpressBridge = function (options) {

    var app = express();

    app.set('port', process.env.PORT || 3000);
    app.use(logger('dev'));

    if ('development' == app.get('env')) {
        app.use(errorHandler());
    }
    
    return app;
};

module.exports = ExpressBridge;
