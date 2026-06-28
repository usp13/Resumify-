const express = require ( 'express')
const cookieparser = require('cookie-parser')
const cors = require('cors')



const app = express()

app.use(express.json())
app.use(cookieparser())
app.use(cors({
    origin: 'http://localhost:5173', 
    credentials: true 
}))

const authrouter = require('./routes/auth.routes')
const interviewRouter = require('./routes/interview.routes')

app.use( '/api/auth' , authrouter)
app.use( '/api/interview' , interviewRouter)

module.exports = app   