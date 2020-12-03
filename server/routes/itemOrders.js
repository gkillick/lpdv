const router = require('express').Router()
const verifyToken = require('./verifyToken')
const db = require('../database')


router.post('/', verifyToken, async (req,res) => {

    const id = await db.addItemOrder(req.body)
    console.log(id)

    const itemOrder = req.body
    itemOrder.id = id

    res.send(itemOrder)

})
