const express = require("express");
const GigsModel = require("../Model/model");

const userRouter = express.Router();

userRouter.get("/", async (req, res) => {
  const serq = req.query.q;
  try {
    
    let data = await GigsModel.find({
      $or: [
        { companies: { $regex: serq, $options: "i" } },
        { primaryText: { $regex: serq, $options: "i" } },
        { description: { $regex: serq, $options: "i" } },
        { headline: { $regex: serq, $options: "i" } },
      ],
    });
    res.send(data);
  } catch (error) {
    res.send(error);
  }
});

module.exports = userRouter;
