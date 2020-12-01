const express = require('express')

const app = express()

const authRoute = require('./routes/auth')

//Route Middlewares
app.use(express.json())
app.use('/api/user', authRoute)

app.listen(3000, () => {console.log('Server is up and running')})

