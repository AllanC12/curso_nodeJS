const User = require('../models/User')
const bcrypt = require('bcryptjs')


module.exports = class AuthController {
    static login(req,res){
        res.render('auth/login')
    }

    static register(req,res){
        res.render('auth/register')
    }

    static async registerPost(req,res){
        const {name,email,password,confirmpassword} = req.body
        const checkEmailExists = await User.findOne({raw: true,where: {email: email}})
        const salt = bcrypt.genSaltSync(10)
        const hashedPassword = bcrypt.hashSync(password, salt)

        if(password != confirmpassword){
            req.flash('message','As senhas não conferem, tente novamente!')
            res.render('auth/register')
            return
        }

        if(checkEmailExists){
            req.flash('message','Este e-mail ja está sendo utilizado')
            res.render('auth/register')
            return
        }

        const user = {
            name,
            email,
            password: hashedPassword,
        }

        try {
            await User.create(user)
            req.flash('message','Usuário cadastrado com sucesso!')
            res.redirect('/')
        } catch (error) {
            console.log(error)
        }
    }
}

