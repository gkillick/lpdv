const router = require('express').Router()
const verifyToken = require('./verifyToken')
const db = require('../database')



router.post('/', verifyToken, async (req,res) => {

    console.log(req.user)
    console.log(req.body)
    console.log('requesting item')
    const itemFound = await db.getItemByName(req.body.name)

    console.log(itemFound)

    if(itemFound){
        res.send('item already exists')
        return
    }

    const item = {
        name: req.body.name,
        user_id: req.user._id,
        price: req.body.price
    }


    const id = await db.addItem(item)
    console.log(id)
    res.send(id)

})


router.get('/', verifyToken, async (req,res) => {

    const items = await db.getItemByUserId(req.user._id)

    console.log(items)

    res.send(items)

})

module.exports = router