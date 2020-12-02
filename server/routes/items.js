const router = require('express').Router()
const verifyToken = require('./verifyToken')
const db = require('../database')



router.post('/add', verifyToken, async(req, res) => {

    console.log(req.user)
    console.log(req.body)
    console.log('requesting item')
    const itemFound = await db.getItemByNameForUserId(req.body.name, req.body.user_id)

    console.log('item found')
    console.log(itemFound)

    if (itemFound) {
        res.status(409).send({error:'ITEM_EXISTS'})
        return
    }

    const item = req.body

    const id = await db.addItem(item)
    console.log(id)
    res.send(item)

})


router.get('/', verifyToken, async(req, res) => {

    const items = await db.getItemByUserId(req.user._id)

    console.log(items)

    res.send({items: items})

})

module.exports = router