var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

//  View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//  Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//  Set static Path
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
  res.render('index.ejs');
});

app.listen(3000, function(){
  console.log('Server started on Port 3000...');
});
