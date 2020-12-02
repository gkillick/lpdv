const admin = require('firebase-admin')
const serviceAccount = require('./lpdv-cdf2e-firebase-adminsdk-mf06f-7e1ca62523.json')

class FirestoreClient{


    constructor(){

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

    async getUserByName(name){

        console.log(name)

        const users = this.db.collection('users')

        const queryRef = await users.where('name', '==', name).get()


        if(queryRef.empty){
            return null
        }else{
            const data = []
            queryRef.forEach(doc =>{
                data.push({
                    id: doc.id,
                    data: doc.data()
                })
            })

            return data[0]      //Send back first one since there should only ever be one with the same name
        }


    }

    async getUserById(id){

        const users = this.db.collection('users')

        const queryRef = users.where('id', '==', id)

    }


    async addItem(item) {
        const res = await this.db.collection('items').add(item)

        console.log(res.id)

        return res.id
    }


    async getItemByNameForUserId(name, id){

        const items = this.db.collection('items')


        const queryRef = await items.where('name', '==', name).get()


        if(queryRef.empty){
            return null
        }else{
            const data = []
            queryRef.forEach(doc =>{
                const d = doc.data()
                if(d.user_id === id){
                    d.id = doc.id
                    data.push(d)
                }
            })

            return data[0]
        }
    }

    async getItemByUserId(id){

        const items = this.db.collection('items')

        const queryRef = await items.where('user_id', '==', id).get()


        if(queryRef.empty){
            return null
        }else{
            const data = []
            queryRef.forEach(doc =>{
                const d = doc.data()
                d.id = doc.id
                data.push(d)
            })

            return data
        }
    }

    async addOrder(order){
        const res = await this.db.collection('orders').add(order)

        return res.id
    }

    async getOrdersByUserId(id){

        const orders = this.db.collection('orders')

        const queryRef = await orders.where('user_id', '==', id).get()


        if(queryRef.empty){
            return null
        }else{
            const data = []
            queryRef.forEach(doc =>{
                data.push({
                    id: doc.id,
                    data: doc.data()
                })
            })

            return data
        }
    }
}

const client = new FirestoreClient()





module.exports = client