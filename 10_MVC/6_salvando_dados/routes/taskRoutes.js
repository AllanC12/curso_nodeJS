const express = require('express')
const router = express.Router()

const TaskController = require('../controller/TaskController')

router.get('/create',TaskController.createTask)
router.post('/create',TaskController.createTaskSave)
router.get('/', TaskController.showTasks)

module.exports = router