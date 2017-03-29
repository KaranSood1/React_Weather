var express = require('express');

//Create our app

var app = express();

//to tell which folder we wanna serve and allows the functionality

app.use(express.static('public'));

app.listen(3000, function(){
    console.log('Express server is up at port 3000');
});
