//this file needs to be edited, I put in place holder names
//and the format is different so we need to change that.

namespace('db', function(){
    desc('create a database');
    task('drop', function (params){
        var mysql = require('mysql');
        var connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: ''
        });
        connectoin.connect();

        //create database
        connection.query('create database goatjs', function(err){
            if (err) throw err;
            console.log(err);
        });
        connection.end();
    })
})