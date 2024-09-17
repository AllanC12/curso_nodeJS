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
        
        if(password != confirmpassword){
            req.flash('message','As senhas não conferem, tente novamente!')
            res.render('auth/register')
            return
        }

        //validate if exists a email
        const checkEmailExists = await User.findOne({raw: true,where: {email: email}})
        
        if(checkEmailExists){
            req.flash('message','Este e-mail ja está sendo utilizado')
            res.render('auth/register')
            return
        }
        
        //create a security password
        const salt = bcrypt.genSaltSync(10)
        const hashedPassword = bcrypt.hashSync(password, salt)

        const user = {
            name,
            email,
            password: hashedPassword,
        }

        try {
            const createUser = await User.create(user)

            req.session.userid = createUser.id
            
            req.flash('message','Usuário cadastrado com sucesso!')


            req.session.save(() => {
                res.redirect('/')
                console.log(req.session)
            })
        } catch (error) {
            console.log(error)
        }
    }

    static logout(req,res){
        req.session.destroy()
        res.redirect('/login')
    }

    static async loginPost(req,res){
        const {email,password} = req.body

        const user = await User.findOne({where:{email: email}})

        if(!user){
            req.flash('message','Usuário não encontrado...')
            res.render('auth/login')
            return
        }

        const passwordMatch = bcrypt.compareSync(password,user.password)

        if(!passwordMatch){
            req.flash('message','Senha inválida')
            res.render('auth/login')
            return
        }

        req.flash('message','Usuário autenticado com sucesso!')
        req.session.userid = user.id
        req.session.save(() => {
            res.redirect('/')
        })
    }
}

