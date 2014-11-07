var when = require("when");

var MongoAdapter = function (collectionOptions, db) {
    this._collection = db.collection(collectionOptions.name);
};

MongoAdapter.prototype.aggregate = function (pipeline, options) {

    var deferred = when.defer();

    this._collection.aggregate(pipeline, options || {}, function (err, documents) {

        if (err) {
            deferred.reject(err);
        } else {
            deferred.resolve(documents);
        }
    });

    return deferred.promise;
};

module.exports = MongoAdapter;