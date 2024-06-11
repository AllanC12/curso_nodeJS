const express = require('express')
const router = express.Router()
const path = require('path')

const basePath = path.join(__dirname,'../templates')

router.get('/add', (req,res) => {
    res.sendFile(`${basePath}/usersForm.html`)
 })
 
 router.post('/save',(req,res) => {
    console.log(req.body)
    const {name,age} = req.body
    res.sendFile(`${basePath}/usersForm.html`)
 })
 
 router.get('/:id', (req,res) => {
    const id = req.params.id
    
    res.sendFile(`${basePath}/users.html`)
 
    console.log(`Buscando usuário: ${id}`)
 })

 module.exports = router