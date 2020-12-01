
const router = require('express').Router()
const verifyToken = require('./verifyToken')
const db = require('../database')



router.post('/', verifyToken, async (req,res) => {

    const order = {
        user_id: req.user._id,
        orders: req.body.orders
    }


    const id = await db.addOrder(order)
    console.log(id)
    res.send(id)

})


router.get('/', verifyToken, async (req,res) => {

    const orders = await db.getOrdersByUserId(req.user._id)
    console.log(orders)

    res.send(orders)

})

module.exports = router