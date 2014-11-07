var twittter = require("ntwitter");

var host = process.env.HOST || '0.0.0.0';
var port = process.env.PORT || 3000;

process.on('uncaughtException', function (err) {
    console.log(err);
    setTimeout(process.end, 1000);
});

function main(context) {
    if (module === require.main) {
        var app = context.app;
        var router = context.router;

        router.setContext(context);
        router.attachRoutes();

        var server = app.listen(port, host, function () {
            console.log('Server listening on %s:%d', host, port);
        });

        var twit = new twittter({
            consumer_key: 'put-yours-here',
            consumer_secret: 'put-yours-here',
            access_token_key: 'put-yours-here',
            access_token_secret: 'put-yours-here'
        });

        var io = require("socket.io").listen(server);

        twit.stream('statuses/filter',{ track: ''}, function(stream){

        });

    }
}

require('./bootstrap').then(main, console.error);


