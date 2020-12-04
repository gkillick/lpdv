const router = require('express').Router()
const verifyToken = require('./verifyToken')
const db = require('../database')


router.post('/add', verifyToken, async (req,res) => {

    const itemOrders = req.body.orders

    ordersResponse = []
    for(let itemOrder of itemOrders){
        const id = await db.addItemOrder(itemOrder)
        console.log(id)
        itemOrder.id = id
        ordersResponse.push(itemOrder)
        console.log(itemOrder)
    }

    res.send({itemOrders: ordersResponse})

})


router.get('/', verifyToken, async (req,res) => {
    const itemOrders = await db.getItemOrdersByUserId(req.user._id)

    res.send({itemOrders: itemOrders})
})


module.exports = router