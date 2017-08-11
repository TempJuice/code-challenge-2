var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var joke = require('./routes/jokes');

// serve back static files
app.use(express.static('server/public'));

// Parse post request (data becomes req.body)
app.use(bodyParser.urlencoded({ extended: true }));

var port = 5000;

app.use('/joke', joke);

// //Post Route
// app.post('/joke', function (req,res) {
//   if( req.body.whoseJoke === '' || req.body.jokeQuestion === '' || req.body.punchLine === '' ){
//       res.sendStatus( 400 )
//   } else {
//   jokes.push(req.body);
//   res.sendStatus(201);
//   };			
// })

// app.get('/joke', function (req,res) { 
// 	res.send(jokes); 
// })

// spinning up the server
app.listen(port, function () {
  console.log('server up on port: ', port);
}); // end spin up server
