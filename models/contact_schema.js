const mongoose=require("mongoose")

const contact=new mongoose.Schema({
    inquiry:{
    type:String,
    },
    
    Firstname: {
        type:String
    },
    Secondname: {
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
})

const Contact=mongoose.model("Contact",contact)


module.exports=Contact
