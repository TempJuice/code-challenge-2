var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

// serve back static files
app.use(express.static('server/public'));

// Parse post request (data becomes req.body)
app.use(bodyParser.urlencoded({ extended: true }));

var port = 5000;

// Creating jokes array
var jokes = [
  {
    whoseJoke: "Danny",
    jokeQuestion: "Why do scuba divers fall backwards out of boats?",
    punchLine: "If they fell forwards they’d still be in the boat"
  },
  {
    whoseJoke: "Luke",
    jokeQuestion: "Twofish are in a tank. What did one fish say to the other?",
    punchLine: "Do you know how to drive this thing?"
  },
  {
    whoseJoke: "Millie",
    jokeQuestion: "What do you call a pile of cats?",
    punchLine: "A meowntain!"
  },
  {
    whoseJoke: "dEv",
    jokeQuestion: "Why should you not play cards in the forest?",
    punchLine: "Too many Cheetahs"
  },
  {
    whoseJoke: "Scott",
    jokeQuestion: "I went to the zoo the other day, it had one dog,",
    punchLine: "It was a shih tzu."
  }
];

//Post Route
app.post('/joke', function (req,res) {
  if( req.body.whoseJoke === '' || req.body.jokeQuestion === '' || req.body.punchLine === '' ){
      res.sendStatus( 400 )
  } else {
  jokes.push(req.body);
  res.sendStatus(201);
  };			
})

app.get('/joke', function (req,res) { 
	res.send(jokes); 
})

// spinning up the server
app.listen(port, function () {
  console.log('server up on port: ', port);
}); // end spin up server
