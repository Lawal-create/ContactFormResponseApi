const mongoose=require("mongoose")

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
        required:true
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
