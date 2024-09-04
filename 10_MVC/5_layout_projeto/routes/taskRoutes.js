const express = require('express')
const router = express.Router()

const TaskController = require('../controller/TaskController')

router.get('/create',TaskController.createTask)

module.exports = router