const express=require("express")
const router=express.Router()

const controller=require("../controllers/userControllers")
const checkBody = require("../middlewares/validator")


router
.post("/",checkBody,controller.saveFormData)
.get("/",controller.getSpecificData)


module.exports=router