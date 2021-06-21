const dotenv=require("dotenv")
dotenv.config({path: __dirname + '/.env'})
const express=require("express")
const app=express()
const userRoutes=require("./routes/userRoutes")
const db=require(`./utils/DatabaseConn.js`)
const request = require('supertest');

db()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/",userRoutes)




module.exports=app