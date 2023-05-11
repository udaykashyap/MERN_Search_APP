const express = require('express');
const Connections = require('./db');
const { adminRouter } = require('./Router/admin');
const userRouter = require('./Router/user');
const cors = require('cors')
require('dotenv').config()
const app = express();

//Cors helps to use api anywhere.
app.use(cors())

app.use(express.json());

app.use("/admin", adminRouter)
app.use('/user', userRouter)

app.listen(process.env.PORT, async () => {
    await Connections
    console.log("connected to the mongodb")
    console.log("Listening on 8080")
})