fs = require('fs').promises; //read the files
ejs = require('ejs');
qs = require('querystring');
const url = require('url');
var sessions = require("client-sessions");
module.exports = {
    'readhtml': function(filepath) {
        return fs.readFile(filepath, 'utf8')
    },
    'get_extension': function(extension_path) {
        return extension_path.split('.').pop();

    },
    'renderHTML': async function(htmlfile_Path, data) {
        var html_data = await this.readhtml("./Html/" + htmlfile_Path).then(function(success) {
            // console.log(success);
            // success = success.replace('${script}', '<script> var data = ' + data + '</script>')
            return ejs.render(success, data);

        }).catch(function(err) {
            console.log(err);

        })
        return html_data
    },
    'get_url': function(url) {
        return url.split('?')[0];
    },
    'getUrlData': function(req) {
        if (req.method == 'POST') {
            console.log("POST");
            var json = {};
            var body = '';
            return new Promise(function(resolve, reject) {
                    req.on('data', function(data) {
                        body += data;
                        console.log("Partial body: " + body);
                    });
                    req.on('end', function() {
                        json = qs.parse(body);
                        console.log(json);
                        resolve(json);

                    });
                })
                .then(function(data) {
                    return data;

                });
        }
        if (req.method == 'GET') {
            const parsed = url.parse(req.url);
            return qs.parse(parsed.query);
        }

    },
    'sendError': function(res, data) {
        res.writeHead(401, { 'Content-Type': 'text/html' });
        res.end(data);
    },
    'getCookie': function(request) {
        var list = {},
            rc = request.headers.cookie;

        rc && rc.split(';').forEach(function(cookie) {
            var parts = cookie.split('=');
            list[parts.shift().trim()] = decodeURI(parts.join('='));
        });
        console.log(list);
        return list;
    },
    'isLogin': function(request) {
        var Cookie = this.getCookie(request);
        if (Cookie.login && Number.isInteger(parseInt(Cookie.login))) {
            console.log(parseInt(Cookie.login));
            return parseInt(Cookie.login);
        }
        return false;
    },
    'dateANDtime': function(_res) {
        var date = (locales = {},
                plugins = {},
                lang = 'en',
                _res = {
                    MMMM: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                    MMM: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                    dddd: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                    ddd: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                    dd: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
                    A: ['AM', 'PM']
                }),
    }

}