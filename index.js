var colors = require('colors/safe');

var express = require('express')
var app = express();
var ejs = require('ejs');

var routes = require('./routes');


app.set('view engine', 'ejs');



app.get('/:name', function (req, res) {
  console.log('requestmade!');
  //console.log(req);
  var p = {
    name: 'david',
    addres: '123 main st',
    fruit: ['apples','bannaans', 'pears']
  }

  res.render('myview', {data: p});
})

app.listen(3000);
console.log('our server is running!')
