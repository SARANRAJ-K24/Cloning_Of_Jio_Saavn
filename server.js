var http = require('http');
var url = require('url');
var route = require('./route.js') //to import the json file(route.js)
var core = require('./core') //to import the json file(core.js)
var bodyParser = require('body-parser')





http.createServer(

    async function(req, res) {
        var url = req.url;
        var route_url = core.get_url(req.url);
        if (route[route_url]) {
            var controller = route[route_url]['controller'];
            var action = route[route_url]['action'];
            controller[action](req, res);


        } else {
            var html_data = await core.readhtml('.' + req.url).then(function(success) {
                res.writeHead(200, { 'Content-Type': core.get_extension(req.url) });
                res.end(success);
            }).catch(function(error) {});
        }
    }


).listen(3000)
console.log('web server at port 3000 is running..')
http.createServer();