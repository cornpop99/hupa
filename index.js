const express = require('express');
const app = new express();
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000;


app.get('/home', function(request, response){
    response.sendFile(__dirname, 'home.html');
});

app.listen(port, function(){
    console.log("running" );
  });