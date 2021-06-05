const validator= require("validator")
const {inquiryList}= require("../controllers/userControllers")

//validates the email-address
const checkEmail=(EmailAddress)=>{
    return validator.isEmail(EmailAddress)
    }
//validates the phone-number
const checkPhoneNumber=(PhoneNumber)=>{
    return validator.isMobilePhone(PhoneNumber)
}
//validates the inquiry
const checkInquiry=(inquiry)=>{
    const inquired= parseInt(inquiry)
    if(inquired>=0 && inquired<inquiryList.length){
        return true
    }else{
        return false
    }
    }

const checkBody=(req, res,next)=>{

    let formData=req.body
    //validates the form input
    let inquiryCheck=checkInquiry(formData.inquiry)
    let emailCheck=checkEmail(formData.EmailAddress)
    let phoneNumberCheck=checkPhoneNumber(formData.PhoneNumber)
    let firstnameCheck=formData.Firstname.length>0
    let secondnameCheck=formData.Lastname.length>0

    if(inquiryCheck===emailCheck===phoneNumberCheck===firstnameCheck===secondnameCheck){
        next();
    }else{
        res.status(500).json({
            status:"ERROR",
            message:"Incorrect Data"
        })

    }
}


module.exports=checkBody


