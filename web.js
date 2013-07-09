var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());
var buffer = new Buffer(5000);

app.get('/', function(request, response) { 
  var temp = fs.readFileSync('index.html');
  var mystring = temp.toString();
  buffer.write(mystring, mystring.length, "utf-8");
  response.send(buffer.toString("utf-8"));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
