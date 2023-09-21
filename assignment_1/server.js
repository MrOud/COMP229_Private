process.env.NODE_ENV = process.env.NODE_ENV || "development"
var express = require('./config/express'); 

var app = express(); 
app.listen(4000); 
module.exports = app; 

console.log('Server running at http://127.0.0.1:4000/');
