 const { urlencoded } = require("body-parser")
const express=require("express")
 const app=express()

 const port=3000;

 app.use(express.json())
 app.use(express.urlencoded({ extended: true }))

 app.post("/",(req,res)=>{
     console.log(req.body)
     res.status(200)

 })

 app.get('/', (req,res)=>{
     res.send("Server is working perfectly at port 3000...")

 })

 app.listen(port,()=>{
     console.log(`Server is running at port ${port}`)
 })