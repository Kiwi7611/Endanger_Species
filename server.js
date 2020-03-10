var express = require('express');
var app = express();
app.use(express.static('name'));
app.set('view engine','ejs');
var app = express();


var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: true }); // for parsing form data
app.use(urlencodedParser);
var count = 0;

app.get('/', function (req, res) {

  res.render('Endanger_Home.ejs',{})
});

var alldatas = [];

app.get('/allanimals', function(req,res) {

    var data = {
      choice:req.query.choices
    };
  
    alldatas.push(data);
    res.render('AllAnimal.ejs', data);
});


app.get('/fish', function (req, res) {
	var fileToSend = "fish.html";
	res.sendfile(fileToSend, {root: './name'}); // Files inside "public" folder
});

app.get('/mammal', function (req, res) {
	var fileToSend = "mammal.html";
	res.sendfile(fileToSend, {root: './name'}); // Files inside "public" folder
});

app.get('/reptile', function (req, res) {
	var fileToSend = "reptile.html";
	res.sendfile(fileToSend, {root: './name'}); // Files inside "public" folder
});

app.get('/asia', function (req, res) {
	var fileToSend = "asia.html";
	res.sendfile(fileToSend, {root: './name'}); // Files inside "public" folder
});

app.get('/africa', function (req, res) {
	var fileToSend = "africa.html";
	res.sendfile(fileToSend, {root: './name'}); // Files inside "public" folder
});

app.get('/america', function (req, res) {
	var fileToSend = "america.html";
	res.sendfile(fileToSend, {root: './name'}); // Files inside "public" folder
});







  app.listen(80, function () {
    console.log('Example app listening on port 80!')
  })

