const tasks = require('../model/task');

exports.find = async (req, res) => {
    try {
        const data = await tasks.find();
        res.status(200).json(data);
    } catch (error) {
        console.log(error);
    }
}

exports.create = async (req, res) => {
    try {
        const { title, description, dueDate, task } = req.body;
        console.log(title, description, dueDate, task);
        const data = await tasks.create({
            title,
            description,
            dueDate,
            task
        });
        console.log(data);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json(error);
    }
};

exports.update = async (req, res) => {
    try {
        console.log(req.body)
    } catch (error) {
        
    }
};