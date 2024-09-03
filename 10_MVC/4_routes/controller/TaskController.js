const Task = require('../models/Task')

module.exports = class TaskController {
    static getAll(req,res){
        res.render('tasks/allTasks')
    }

    static createTask(req,res){
        res.render('tasks/create')
    }
}