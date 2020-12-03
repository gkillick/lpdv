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

    orders = await orders.map(
        async(order) => {
            order.itemOrders = await db.getItemOrdersByOrderId(order.id)
            return order;
        }
    )

    console.log(orders)

    res.send({ orders: orders })

})

router.put('/', verifyToken, async(req, res) => {

    const updated = await db.updateOrder(req.body)

    if (updated) {
        res.send(req.body)
    } else {
        res.status(400).send({ error: "NOT_UPDATED" })
    }

})

router.delete('/:id', verifyToken, async(req, res) => {
    const deleted = await db.deleteOrderForUser(req.params.id, req.user.id)
})

module.exports = router