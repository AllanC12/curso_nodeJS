const Task = require('../models/Tasks')

module.exports = class TaskController {
    static createTask(req,res){
        res.render('tasks/create')
    }

    static async createTaskSave(req,res){
       const task = {
        title: req.body.title,
        description: req.body.description,
        done: false
       }

       await Task.create(task)
       res.redirect('/tasks')
    }

    static async showTasks(req,res){
        const tasks = await Task.findAll({raw: true})
        console.log(tasks)
        res.render('tasks/all', tasks)
    }
}

