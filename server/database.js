const admin = require('firebase-admin')
const serviceAccount = require('./lpdv-cdf2e-firebase-adminsdk-mf06f-7e1ca62523.json')

class FirestoreClient {


    constructor() {

        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount)
        })

        this.db = admin.firestore()
    }

    async addUser(userData) {
        const res = await this.db.collection('users').add(userData)

        console.log(res.id)

        return res.id
    }

    async getUserByName(name) {

        console.log(name)

        const users = this.db.collection('users')

        const queryRef = await users.where('name', '==', name).get()


        if (queryRef.empty) {
            return null
        } else {
            const data = []
            queryRef.forEach(doc => {
                data.push({
                    id: doc.id,
                    data: doc.data()
                })
            })

            return data[0] //Send back first one since there should only ever be one with the same name
        }


    }

    async getUserById(id) {

        const users = this.db.collection('users')

        const queryRef = users.where('id', '==', id)

    }


    async addItem(item) {
        const res = await this.db.collection('items').add(item)

        console.log(res.id)

        return res.id
    }


    async getItemByNameForUserId(name, id) {

        const items = this.db.collection('items')


        const queryRef = await items.where('name', '==', name).get()


        if (queryRef.empty) {
            return null
        } else {
            const data = []
            queryRef.forEach(doc => {
                const d = doc.data()
                if (d.user_id === id) {
                    d.id = doc.id
                    data.push(d)
                }
            })

            return data[0]
        }
    }

    async updateItem(item_id, item) {

        const items = this.db.collection('items')

        const queryRef = await items.where('user_id', '==', item.user_id).get()

        if (queryRef.empty) {
            return null
        } else {
            queryRef.forEach(async doc => {
                const d = doc.data()
                console.log(doc.id)
                if (item_id === doc.id) {
                    const res = await items.doc(doc.id).update(item)
                    console.log(res)
                }
            })
        }
        return 'updated'

    }

    async deleteItemByIdForUser(item_id, user_id) {

        const items = this.db.collection('items')


        const queryRef = await items.where('user_id', '==', user_id).get()





        if (queryRef.empty) {
            return null
        } else {

            queryRef.forEach(async doc => {
                const d = await doc.data()
                console.log(doc.id)
                console.log(item_id)
                if (doc.id === item_id) {
                    const res = await items.doc(doc.id).delete()
                }
            })

            return "deleted"
        }
    }

    async getItemByUserId(id) {

        const items = this.db.collection('items')

        const queryRef = await items.where('user_id', '==', id).get()


        if (queryRef.empty) {
            return null
        } else {
            const data = []
            queryRef.forEach(doc => {
                const d = doc.data()
                d.id = doc.id
                data.push(d)
            })

            return data
        }
    }

    async addOrder(order) {
        const res = await this.db.collection('orders').add(order)

        return res.id
    }

    async getItemOrdersByOrderId(id) {
        const itemOrders = this.db.collection('itemOrders')
        const queryRef = await itemOrders.where('order_id', '==', id).get()
        if (queryRef.empty) {
            return null
        } else {
            const data = []
            queryRef.forEach(doc => {
                const d = doc.data()
                d.id = doc.id
                data.push(d)
            })
            return data
        }

    }
    async getOrdersByUserId(id) {

        const orders = this.db.collection('orders')

        const queryRef = await orders.where('user_id', '==', id).get()


        if (queryRef.empty) {
            return null
        } else {
            const data = []
            queryRef.forEach(doc => {
                const d = doc.data()
                d.id = doc.id
                data.push(d)
            })

            return data
        }
    }


    async updateOrder(order) {

        const orders = this.db.collection('orders')

        const updating = await orders.doc(order.id).update(order)


        return 'updated'

    }

    async deleteOrder(order_id) {

        const orders = await this.db.collection('orders').doc(order_id).delete()

/*
        const queryRef = await orders.where('id', '==', order_id).get()

        if (queryRef.empty) {
            return null
        } else {
            queryRef.forEach(async doc => {
                const res = await orders.doc(doc.id).delete()
                console.log(res)
            })
        }
        */
        return 'deleted'

    }

    async addItemOrder(itemOrder) {

            const itemOrders = await this.db.collection('itemOrders').add(itemOrder)

            return itemOrders.id
        }
        /*
            async getItemOrdersForOrderId(order_id){

                const itemOrders = await this.db.collection('itemOrders')

                itemOrders.
            }
            */

    async deleteItemOrdersByOrderId(order_id){


        const itemOrders = await this.db.collection('itemOrders')

        const queryRef = await itemOrders.where('order_id', '==', order_id).get()


        if (queryRef.empty) {
            return null
        } else {
            queryRef.forEach(async doc => {
                const res = await itemOrders.doc(doc.id).delete()
            })
        }
        return 'deleted'
    }

    async getItemOrdersByUserId(user_id){

        const itemOrders = await this.db.collection('itemOrders')

        const queryRef = await itemOrders.where('user_id', '==', user_id).get()

        if(queryRef.empty){
            return null
        }else{
            const itemOrders = []
            queryRef.forEach(async doc => {
                const d = doc.data()
                d.id = doc.id
                itemOrders.push(d)
            })

            return itemOrders
        }
    }
}

const client = new FirestoreClient()





module.exports = client