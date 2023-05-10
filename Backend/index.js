const express = require('express');
const Connections = require('./db');
const { adminRouter } = require('./Router/admin');
const userRouter = require('./Router/user');
const app = express();

app.use(express.json());

app.use("/admin", adminRouter)
app.use('/user', userRouter)

app.listen(8080, async () => {
    await Connections
    console.log("connected to the mongodb")
    console.log("Listening on 8080")
})