var express = require('express');

var app = express();
var port = 5577

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.listen(port, () => console.log("Server start on port: " + port))

app.use(express.static("./"));

app.get('/', (req, res) => {

  var word= req.query.word;
 
  var query= require('./word');
  query.queryWord(word, res);
  
})

app.get('/Dictionary', function(req, res){
  var path = require('path');
    res.sendFile(path.join(__dirname, '/dict.html'));
})