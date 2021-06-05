const express=require("express")
const router=express.Router()

const controller=require("../controllers/userControllers")
const checkBody = require("../middlewares/validator")


router
.post("/",checkBody,controller.saveFormData)
.get("/",controller.getSpecificData)

router.get("*",(req,res)=>{
    res.status(404).json({
        error:"error 404 This page doesn't exist"
    })
})

module.exports=router