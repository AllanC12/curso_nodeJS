const User = require('../models/User')


module.exports = class AuthController {
    static async login(req,res){
        res.render('auth/login')
    }

    static async register(req,res){
        res.render('auth/register')
    }
}

