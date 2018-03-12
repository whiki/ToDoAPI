const express = require('express');
const router = express.Router();
const Task = require('../model/tasks');

//Get Request
router.get('/task', function(req, res, next){
	if(true){
		Task.find({completed: req.query.completed}).then(function(task){
			res.send(task);
		});
	} else if(true){
		Task.find({name: req.query.name}).then(function(task){
			res.send(JSON.parse(JSON.stringify(task)));
		});
	} else if(true){
		Task.find({date: req.query.date}).then(function(task){
			res.send(task);
		if (!task){
			res.send('NO RESULT');
			};
		});
	};
});

//Post Request
router.post("/task", function(req, res, next){
	Task.create(req.body).then(function(task){
		res.send(task);
	}).catch(next);
});

//Put request
router.put('/task/:id', function(req, res, next){
	Task.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
		Task.findOne({_id: req.params.id}).then(function(task){
			res.send(task);
		});
	}).catch(next);
});

//Delete
router.delete('/task/:id', function(req, res, next){
	Task.findByIdAndRemove({_id: req.params.id}).then(function(task){
		res.send(task);
	}).catch(next);
});


module.exports = router;