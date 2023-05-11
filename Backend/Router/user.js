const express = require("express");
const GigsModel = require("../Model/model");

const userRouter = express.Router();

userRouter.get("/", async (req, res) => {

  //On the place of aggregate, and unwind functions, I used regular expression and in this condition if the user find according to the company name or primarText, or description or headline it will give the result according to the query.  documentation link :- https://www.mongodb.com/docs/manual/reference/operator/query/regex/

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
