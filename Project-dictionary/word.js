
exports.queryWord= function(word, res){
  const mysql = require('mysql');
  const { callbackify } = require('util');
  
  var con = mysql.createConnection({
    host: "127.0.0.1",  
    database: "entries",
    port: 3306,
    user: "root",
    password: "password",
  
  });
  
  con.connect(function (err) {
    if (err) throw err;
    
  });
  
 
    var sql = `SELECT wordtype, definition FROM entries where word= '${word}'`;
     con.query(sql, function (err, data) {
      if (err) throw err;
      res.json(data);
      
  
    });
}










