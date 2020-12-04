const router = require('express').Router()
const verifyToken = require('./verifyToken')
const db = require('../database')



router.post('/add', verifyToken, async(req, res) => {

    const id = await db.addOrder(req.body)

    req.body.id = id

    res.send(req.body)

})


router.get('/', verifyToken, async(req, res) => {

    var orders = await db.getOrdersByUserId(req.user._id)
        //populate itemOrders
    for (let i = 0; i < orders.length; i++) {
        var itemOrders = await db.getItemOrdersByOrderId(orders[i].id)
        orders[i].itemOrders = itemOrders
    }
    console.log(itemOrders)


    console.log("look here")
    console.log(orders)
    res.send({ orders: orders })

})

router.put('/', verifyToken, async(req, res) => {

    const updated = await db.updateOrder(req.body)

    var itemOrders = await db.deleteItemOrderByOrderId(req.body.id)

    res.send(req.body)

})

router.delete('/:id', verifyToken, async(req, res) => {
    const deleted = await db.deleteOrderForUser(req.params.id, req.user.id)
})

module.exports = router