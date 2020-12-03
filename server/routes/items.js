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
    item.id = id

    res.send(item)

})


router.get('/', verifyToken, async(req, res) => {

    const items = await db.getItemByUserId(req.user._id)

    console.log(items)

    res.send({items: items})

})

router.put('/', verifyToken, async (req,res) => {

    console.log('request')

    console.log(req.body)
    const newItem = await db.updateItem(req.body.id, req.body)

    console.log(newItem) 


    const item = req.body

    res.send(item)


})


router.delete('/:id', verifyToken, async (req, res) => {


    const del = await db.deleteItemByIdForUser(req.params.id, req.user._id)
    console.log(del)

    if(!del){
        res.status(400).send({error: 'ITEM_NOT_FOUND'})
    }

    res.send({id: req.params.id})

})

module.exports = router