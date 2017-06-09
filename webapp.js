var express = require('express')

var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json()); // for parsing application/json
app.use(express.static('static'));

let bugs = [{id: 1, status: "Open", priority: "High", owner: "Marco", title: "Bug numero uno"},
							{id: 2, status: "In Progress", priority: "Low", owner: "Anne Marie", title: "Numba 2"}];

app.get('/api/bugs', function(req, res) {
	res.status(200).send(JSON.stringify(bugs));
})

app.post('/api/bugs', function(req, res) {
	console.log("Request body: ", req.body);
	let newBug = req.body;
	newBug.id = bugs.length + 1;
	bugs.push(newBug);
	res.json(newBug);
})

var server = app.listen(3000, function() {
	var port = server.address().port;
	console.log("Started server at port", port);
});
