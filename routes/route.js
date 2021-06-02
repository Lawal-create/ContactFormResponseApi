const express=require("express")
const router=express.Router()

const controller=require("../controllers/userControllers")

router
.post("/",controller.saveFormData)
.get("/",controller.getSpecificData)


module.exports=router