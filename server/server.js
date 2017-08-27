var express = require ('express');
var app = express();
var bodyParser = require('body-parser');
// var path = require('path');
// var index = require('./routes/index.js');
var real_estate = require('./routes/real_estate.js');
var mongoose = require('mongoose');
// 
// app.use(express.static(path.join(__dirname, './public')));
app.use(express.static('public'));
app.use(bodyParser.json()); // needed for angular requests
//  
// app.use('/', index);
app.use('/real_estate', real_estate)
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
// 
var databaseUrl = 'mongodb://localhost:27017/betelgeuse';
mongoose.connect(databaseUrl, 
{
    useMongoClient: true
});
// 
mongoose.connection.on('connected', function() {
    console.log('mongoose connected to : ', databaseUrl);    
});
mongoose.connection.on('error', function (err) {
    console.log('mongoose connection error to : ', err);
});
// 
app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), function() {
    console.log('Listening on port: ', app.get('port'));
});
