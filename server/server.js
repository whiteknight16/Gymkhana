const express = require('express')
const app = express()
const port = 3000
const exerciseList = require('./routes/exerciseList')
const login = require('./routes/login')
const blog = require('./routes/blog')
const cors = require('cors');


const connectDb = require('./db/connect')
require('dotenv').config()
// Middleware
app.use(cors());
app.use(express.json())
app.use("/api/v1/exerciselist", exerciseList)
app.use("/api/v1/auth", login)
app.use("/api/v1/blog", blog)
const start = async () => {
    try {
        await connectDb(process.env.CONNECTION_STRING)
        app.listen(port, () => console.log(`Example app listening on port ${port}!`))
    } catch (error) {
        console.log(error)
    }
}

start()

