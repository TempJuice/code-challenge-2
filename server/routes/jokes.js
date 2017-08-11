var express = require('express');
var router = express.Router();
var pool = require('../modules/pool');

router.post('/', function (req,res) {
  console.log('joke post was hit!');
	// Add an INSERT query
	pool.connect(function(errorConnectingToDatabase, client, done){
		if(errorConnectingToDatabase) {
			// when connecting to database failed
			console.log('Error connecting to database', errorConnectingToDatabase);
			res.sendStatus(500);
		} else {
			// when connecting to database worked!
			client.query('INSERT INTO jokesarray ("whoseJoke", "jokeQuestion", "punchLine") VALUES ($1, $2, $3);', [req.body.whoseJoke, req.body.jokeQuestion, req.body.punchLine], function(errorMakingQuery, result) {
				done();
				if(errorMakingQuery) {
					console.log('Error making database query', errorMakingQuery);
					res.sendStatus(500);
				} else {
					res.sendStatus(201);
				}
			});
		}
	});
});

router.get('/', function (req,res) { 
	// Add a SELECT query
	pool.connect(function(errorConnectingToDatabase, client, done){
		if(errorConnectingToDatabase) {
			// when connecting to database failed
			console.log('Error connecting to database', errorConnectingToDatabase);
			res.sendStatus(500);
		} else {
			// when connecting to database worked!
			client.query('SELECT * FROM jokesarray;', function(errorMakingQuery, result) {
				done();
				if(errorMakingQuery) {
					console.log('Error making database query', errorMakingQuery);
					res.sendStatus(500);
				} else {
                    res.send(result.rows);
                    
				}
			});
		}
	});
});

module.exports = router;