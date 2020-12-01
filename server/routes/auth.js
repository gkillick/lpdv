const router = require('express').Router()
const db = require('../database')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


router.post('/register', async (req,res) => {

    const userData = await req.body

    const userFound = await db.getUserByName(req.body.name)

    console.log(userFound)
    console.log(req.body.password)

    if(userFound){
        res.send('user already exists')
        return
    }

    const salt = await bcrypt.genSalt(10)

    const hashPassword = await bcrypt.hash(req.body.password, salt)

    const user = {
        name: req.body.name,
        password: hashPassword
    }


    const id = await db.addUser(user)
    console.log(id)
    res.send(id)

})

router.post('/login', async (req, res) => {
    console.log('login')

    const user = await db.getUserByName(req.body.name)

    //Check if name is correct
    if(!user){
        res.status(400).send('INVALID_USERNAME')
    }


    //Check if password is correct

    console.log(user.data.password)
    console.log(req.body.password)
    const validPass = await bcrypt.compare(req.body.password, user.data.password)

    if(!validPass){
        res.status(400).send("INVALID_PASSWORD")
    }

    //Create and assign a token
    const token = jwt.sign({_id:user.id}, process.env.TOKEN_SECRET)

    userData = {
        id: user.id,
        name: user.data.name,
        token: token
    }



    res.header('auth-token', token).send(userData)

})

module.exports = router