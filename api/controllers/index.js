var util = require("util");

var IndexController = function () {
};

IndexController.prototype.setTweetActions = function (tweetActions) {
    this._tweetActions = tweetActions;
};

IndexController.prototype.getTweets = function (request, response) {

};

module.exports = IndexController;