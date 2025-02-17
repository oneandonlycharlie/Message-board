//environment variables stored
require("dotenv").config();
const PORT = process.env.PORT 

// initiate app
const express = require("express")
const app = express()
const messageRouter = require("./controllers/message")

// middleware to parse URLs
app.use(express.urlencoded({extended:false}))
app.use(express.json())

// database connected

app.use("/message", messageRouter)


app.listen(PORT, ()=>{
    console.log("express app started at", PORT)
})