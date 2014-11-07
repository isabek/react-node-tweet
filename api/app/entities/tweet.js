var Waterline = require("waterline");

var Tweet = Waterline.Collection.extend({
    twid: {
        type: 'string',
        require: true
    },
    active: {
        type: 'boolean',
        require: true
    },
    author: {
        type: 'string',
        require: true
    },
    avatar: {
        type: 'string',
        require: true
    },
    body: {
        type: 'string'
    },
    date: {
        type: 'date'
    },
    screenname: {
        type: 'string'
    }
});

module.exports = Tweet;