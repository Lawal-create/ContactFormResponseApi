const dotenv=require("dotenv")
dotenv.config({path: __dirname + '/.env'})
const express=require("express")
const app=express()
const hostname=process.env.HOST
const port=process.env.PORT;
const userRoutes=require("./routes/route")
const db=require(`./utils/connectToDb.js`)

db()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/",userRoutes)

app.listen(port,hostname,()=>{
    console.log(`Server is running at port ${port}`)
})
