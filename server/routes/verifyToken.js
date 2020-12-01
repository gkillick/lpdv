const jwt = require('jsonwebtoken')


module.exports = function auth (req,res,next){
    const token = req.header('auth-token')
    if(!token) return res.status(401).send('ACCESS_DENIED')


    try{
        const verified = jwt.verify(token, process.env.TOKEN_SECRET)
        req.user = verified
        next()
    }catch{
        res.status(400).send("INVALID_TOKEN")
    }
}