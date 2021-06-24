const mongoose=require("mongoose")
const validator=require("validator")

//Schema for the form input
const contact=new mongoose.Schema({
    inquiry:{
    type:String,
    required:true   
    },
    
    Firstname: {
        type:String,
        required:true
    },
    Lastname: {
        type:String,
        required:true
    },
    EmailAddress: {
        type:String,
        required:true,
        lowercase:true
    },
    PhoneNumber: {
        type:String,
        required:true
        
    },
    Message: {
        type:String
    }
},{timestamps: true})

const Contact=mongoose.model("Contact",contact)
module.exports=Contact
