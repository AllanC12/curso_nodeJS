const express = require('express')
const router = express.Router()

const TaskController = require('../controller/TaskController')

router.get('/create',TaskController.createTask)
router.post('/create',TaskController.createTaskSave)
router.post('/remove',TaskController.removeTask)
router.get('/edit/:id',TaskController.updateTask)
router.post('/edit', TaskController.updateTaskPost)
router.post('/updateDone',TaskController.toggleUpdateDone)
router.get('/', TaskController.showTasks)

module.exports = router