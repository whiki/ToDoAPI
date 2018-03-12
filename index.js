const express = require('express');
const routes = require('./routes/api');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');




//setup express
const app = express();


//connnect to database
mongoose.connect('mongodb://localhost/todo');
mongoose.Promise = global.Promise;

//intialize body parser
app.use(bodyParser.json());

/*//flesh out static files
app.use(express.static('public'));
*/


//initialize routes handling
app.use('/api', routes);

//Error Handling using middleware
app.use(function(err, req, res, next){
	//console.log(err);
	//res.status(422).send({error: name});
});

//handles the port to listen on
app.listen(process.env.port || 3000, function(){
	console.log("Listening for requests on port 3000");
});
