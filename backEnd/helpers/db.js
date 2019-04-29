const mysql = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'admin',
  password : 'moimoi1996',
  database : 'BIGSIS'
});
module.exports  =  connection;


