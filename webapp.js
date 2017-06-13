var express = require('express')
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;

var app = express();
var db;

app.use(bodyParser.json()); // for parsing application/json
app.use(express.static('static'));

app.get('/api/bugs', function(req, res) {
	db.collection("bugs").find().toArray(function(err, docs){
		res.status(200).send(JSON.stringify(docs));
	})
})

app.post('/api/bugs', function(req, res) {
	console.log("Request body: ", req.body);
	let newBug = req.body;
	db.collection("bugs").insertOne(newBug).then((r) => {
		const id = r.insertedId;
		db.collection("bugs").find({_id: id}).limit(1).next(function(err, docs) {
			res.json(docs);
		})
	})
})

MongoClient.connect('mongodb://localhost/mern', function(err, dbConnection) {
  db = dbConnection;
  var server = app.listen(3000, function() {
	  var port = server.address().port;
	  console.log("Started server at port", port);
  });
});
