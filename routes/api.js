const express = require('express');
const router = express.Router();
const Task = require('../model/tasks');

//Get Request
router.get('/task', function(req, res, next){
	const completed = req.query.completed === undefined ? undefined : req.query.completed,
	      name = req.query.name,
	      date = req.query.date;
	Task.find({
	'$or': [
		{'completed': completed},
		{'name': name},
		{'date': date}
	]
	}).then(function(task){
	     return res.json({
	     success: true,
	     body: task});
	})
	.catch(function(error){
	   console.log(`fetch TASK error is -> ${JSON.stringify(error)}`);
		return res.json({
		   success: false,
			message: 'Please check the items and try again'
		});
	});
	
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
