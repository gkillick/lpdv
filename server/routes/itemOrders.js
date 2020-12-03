const router = require('express').Router()
const verifyToken = require('./verifyToken')
const db = require('../database')


router.post('/add', verifyToken, async (req,res) => {

    const itemOrders = req.body.orders

    ordersResponse = []
    for(let itemOrder of itemOrders){
        const id = await db.addItemOrder(itemOrder)
        itemOrder.id = id
        ordersResponse.push(itemOrder)
    }

    res.send({itemOrders: ordersResponse})

})


module.exports = router