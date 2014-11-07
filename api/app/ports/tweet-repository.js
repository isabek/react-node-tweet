var _ = require("underscore");

var TweetRepository = function () {
};

TweetRepository.prototype.setAdapter = function (adapter) {
    this._adapter = adapter;
};

TweetRepository.prototype.setFactory = function (factory) {
    this._factory = factory;
};

module.exports = TweetRepository;

