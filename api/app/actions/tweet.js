var TweetActions = function () {

};

TweetActions.prototype.setFactory = function (factory) {
    this._factory = factory;
};

TweetActions.prototype.setRepository = function (repository) {
    this._repository = repository;
};

module.exports = TweetActions;