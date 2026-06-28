const { Router } = require('express')

// Require middleware
const authcontroller = require('../controllers/auth.controller')

const authrouter = Router()

// Require middleware
const authmiddleware = require('../middlewares/auth.middleware')


/**
 * @route POST /api/auth/register
 * @description register a new user 
 * @access Public
 */

authrouter.post("/register" , authcontroller.registerusercontroller )

/**
 * @route POST /api/auth/login
 * @description login user 
 * @access Public
 */

authrouter.post("/login" , authcontroller.loginusercontroller )


/**
 * @route POST /api/auth/logout
 * @description login user 
 * @access Public
 */

authrouter.post("/logout" , authcontroller.logoutusercontroller )

/**
 * @route GET /api/auth/getme
 * @description get the current user 
 * @access Private
 */

// has a middleware and a controller 
authrouter.get( '/getme' , authmiddleware.authuser , authcontroller.getmecontroller  )


module.exports= authrouter