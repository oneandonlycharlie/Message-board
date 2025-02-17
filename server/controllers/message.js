const express = require("express");
const messageRouter = express();
require("dotenv").config();
const db = require("../models/queries")

messageRouter.get("/", async(req,res)=>{
    console.log("received get request")
    const data = await db.getAllMessages()
    res.json({data})
})

messageRouter.post("/", async(req,res)=>{
    console.log("received post request");
    console.log(req.body.name)
    console.log(req.body.message)
    await db.logMessage(req.body.name,req.body.message);
    res.redirect(process.env.CLIENT_URL)
})


module.exports = messageRouter