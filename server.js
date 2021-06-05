const dotenv=require("dotenv")
dotenv.config({path: __dirname + './.env'})
const express=require("express")
const app=express()
// const hostname=process.env.HOST
const port=process.env.PORT||5000;
const userRoutes=require("./routes/userRoutes")
const db=require(`./utils/DatabaseConn.js`)

db()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/",userRoutes)

app.listen(port,()=>{
    console.log(`Server is running at port ${port}`)
})
