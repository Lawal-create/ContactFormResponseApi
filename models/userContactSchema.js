const mongoose=require("mongoose")

//Schema for the form input
const contact=new mongoose.Schema({

    

    inquiry:{
    type:String
    },
    
    Firstname: {
        type:String
    },
    Lastname: {
        type:String
    },
    EmailAddress: {
        type:String
    },
    PhoneNumber: {
        type:String
        
    },
    Message: {
        type:String
    }
},{timestamps: true})

const Contact=mongoose.model("Contact",contact)
module.exports=Contact
