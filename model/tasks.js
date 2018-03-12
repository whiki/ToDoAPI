const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create a task Schema and model
const TaskSchema = new Schema({
	name:{
		type: String,
		required: [true, 'Name of the task is required']
	},

	description:{
		type: String,
		required: [true, 'Description of the task is required']
	},

	date:{
		type: Date,
		required: [true, 'Date for the task is required'],
		default: Date.now
	},

	completed:{
		type: Boolean,
		default: false
	}
});

const Task = mongoose.model('taskcol', TaskSchema);

module.exports = Task;