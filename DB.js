var mysql = require('mysql');
var DBconnection = require('./DBConfiguration');

module.exports = {
    'connection': function() {
        return new Promise(function(resolve, reject) {
            var connection = mysql.createConnection(DBconnection);
            connection.connect(function(error, success) {
                if (error) {
                    reject(error);
                }
                resolve(connection);

            })
        })



    }
}