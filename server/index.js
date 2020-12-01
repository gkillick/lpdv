const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')

dotenv.config()

const app = express()

const authRoute = require('./routes/auth')
const itemsRoute = require('./routes/items')
const ordersRoute = require('./routes/orders')

//Cors middleware

//Route Middlewares
app.use(cors())
app.use(express.json())
app.use('/api/user', authRoute)
app.use('/api/items', itemsRoute)
app.use('/api/orders', ordersRoute)

app.listen(3000, () => {console.log('Server is up and running')})

