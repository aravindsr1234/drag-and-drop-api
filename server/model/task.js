const mongoose = require('mongoose');

const task = mongoose.Schema({
    title: String,
    description: String,
    dueDate: String,
    task: String
});

const tasks = mongoose.model('task', task);
module.exports = tasks;