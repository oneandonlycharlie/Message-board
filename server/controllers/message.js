const express = require("express");
const messageRouter = express();
require("dotenv").config();
const db = require("../models/queries")

messageRouter.get("/", async(req,res)=>{
    const data = await db.getAllMessages()
    res.json({data});
})

messageRouter.post("/", async(req,res)=>{
    await db.logMessage(req.body.name,req.body.message);
    res.redirect(process.env.CLIENT_URL)
})


module.exports = messageRouter