const express = require("express");
const messageRouter = express();

messageRouter.get("/", (req,res)=>{
    console.log("received get request")
    res.send()
})

messageRouter.post("/", (req,res)=>{
    console.log("received post request");
    console.log(req.body)
})


module.exports = messageRouter