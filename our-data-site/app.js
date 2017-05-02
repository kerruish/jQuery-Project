var express = require('express');
var path = require('path');

var app = express();

//  View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'dist/views'));

//  Set static Path
app.use(express.static(path.join(__dirname, 'dist')));

app.get('/', function(req, res) {
    res.render('index.ejs');
});

app.listen(3000, function() {
    console.log('Server started on Port 3000...');
});
