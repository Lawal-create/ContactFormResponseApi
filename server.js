const dotenv=require("dotenv")
dotenv.config({path: __dirname + '/.env'})
const express=require("express")
const app=express()
const hostname=process.env.HOST
const port=process.env.PORT;
const userRoutes=require("./routes/route")
// const inquiryList=["I have a question about the service","I have a problem with the API","I have an issue with the product that needs to be resolves urgently","I have a minor problem","My inquiry isn't amongst the ones mentioned above"]

const db=require(`./utils/connectToDb.js`)
// const schemas=require(`./models/contact_schema.js`)
db()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/",userRoutes)

app.listen(port,hostname,()=>{
    console.log(`Server is running at port ${port}`)
})

// function getSpecificData() {
//     return (req, res) => {
//         res.send("Server is working perfectly at port 3000...")

//     }
// }

// function saveData() {
//     return (req, res) => {
//         let value = req.body
//         const index = parseInt(value.inquiry)
//         value.inquiry = inquiryList[index]

//         let testContact = new schemas(value)
//         console.log(value)
//         res.status(200).json(value)

//         testContact
//             .save()
//             .then(doc => {
//                 console.log(doc)
//             }).catch(err => {
//                 console.log("ERROR")
//             })

//     }
// }
