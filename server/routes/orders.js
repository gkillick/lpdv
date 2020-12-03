
const router = require('express').Router()
const verifyToken = require('./verifyToken')
const db = require('../database')



router.post('/add', verifyToken, async (req,res) => {

    const id = await db.addOrder(req.body)

    console.log(id)

    res.send(req.body)

})


router.get('/', verifyToken, async (req,res) => {

    const orders = await db.getOrdersByUserId(req.user._id)
    console.log(orders)

    res.send(orders)

})

module.exports = router