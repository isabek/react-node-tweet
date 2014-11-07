var load = require("env-config-loader").load;

module.exports = {
    // Application
    'app': {
        create: {
            module: require('./lib/express-bridge'),
            args: [
                {
                }
            ]
        }
    },
    'routes': require('./routes'),
    'router': {
        create: {
            module: require('express-router')
        },
        ready: {
            setRoutes: [
                { $ref: 'routes' }
            ],
            setApp: [
                { $ref: 'app' }
            ],
            setLogger: [ console ]
        }
    },

    // Database stuff
    'mongo-config': require('./configs/db-config.json'),
    'mongo-client-bridge': {
        create: {
            module: require('./lib/mongo-client-bridge'),
            args: [
                { $ref: 'mongo-config' }
            ]
        }
    },

    //Project Configs
    'config': load("./configs/config.json"),

    // CONTROLLERS
    'index-controller': {
        create: {
            module: require('./controllers/index')
        },
        init: {
            setTweetActions: [
                { $ref: 'tweet-actions' }
            ]
        }
    },
    'tweet-actions': {
        create: {
            module: require("./app/actions/tweet")
        },
        init: {
            setFactory: [
                { $ref: 'tweet-factory' }
            ],
            setRepository: [
                { $ref: 'tweet-repository' }
            ]
        }
    },
    'tweet-factory': {
        create: {
            module: require("./app/ports/tweet-factory")
        }
    },

    'tweet-repository': {
        create: {
            module: require("./app/ports/tweet-repository")
        },
        init: {
            setAdapter: [
                { $ref: 'tweet-mongo-adapter' }
            ],
            setFactory: [
                { $ref: 'tweet-factory' }
            ]
        }
    },

    'tweet-mongo-adapter': {
        create: {
            module: require("./adapters/mongo-adapter"),
            args: [
                { $ref: 'tweet-collection-options' },
                { $ref: 'mongo-client-bridge' }
            ]
        }
    },

    'tweet-collection-options': require("./configs/db-tweet-collection-config")
};