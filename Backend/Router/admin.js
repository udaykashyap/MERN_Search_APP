const express = require("express");
const GigsModel = require("../Model/model");

const adminRouter = express.Router();

adminRouter.get('/', async (req, res) => {
    try {
        let data = await GigsModel.find();
        res.send(data);

    } catch (error) {
        res.send(error)
    }
})

adminRouter.post('/addgigs', async (req, res) => {
    const payload = req.body;

    try {
        const rest = await GigsModel(payload)
        await rest.save();
        res.status(200).send({ msg: "Gigs Added Success" })
    } catch (error) {
        res.send(error)
    }
})

module.exports = { adminRouter }