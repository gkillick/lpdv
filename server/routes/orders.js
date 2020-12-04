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
    console.log(req.body.id)
    var itemOrders = await db.deleteItemOrdersByOrderId(req.body.id)

    console.log('item orders')
    console.log(itemOrders)

    res.send(req.body)

})

router.delete('/:id', verifyToken, async(req, res) => {

    console.log('id')
    console.log(req.params.id)
    const deleted = await db.deleteOrder(req.params.id)

    console.log(deleted)

    const dele = await db.deleteItemOrdersByOrderId(req.params.id)

    res.send({id: req.params.id})
})

module.exports = router