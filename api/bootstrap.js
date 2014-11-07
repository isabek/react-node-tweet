var wire = require("wire");
var _ = require("underscore");
var loader = require("env-config-loader");
var load = loader.load;

var DEFAULT_ENV = 'development';

loader.setEnvironment(process.env.NODE_ENV || DEFAULT_ENV);

module.exports = (function () {
    return wire(_.extend(
        load('./spec.js')
    ));
})();