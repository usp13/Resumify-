const jwt = require('jsonwebtoken')

// Require the blacklist model 
const tokenblacklistmodel = require( '../models/blacklist.model')

async function authuser( req , res , next ){

    const token = req.cookies.token

    if( ! token ){ // if token found
        return res.status(401).json({
            message:"Token not found / provided !"
        })
    }

    const istokenblacklisted = await tokenblacklistmodel.findOne({
        token 
    })

    if( istokenblacklisted ){ // if token is actually blacklisted 

        return res.status(401).json({
            message:"Sorry , your token is blacklisted !"
        })


    }

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET) 
    
        req.user = decoded 

        next()

    }
    catch(err){
        return res.status(401).json({
            message:"Invalid token !"
        })
    }


}

module.exports = {
    authuser 
}