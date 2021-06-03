const validator= require("validator")
const {inquiryList}= require("../controllers/userControllers")

const checkEmail=(EmailAddress)=>{
    return validator.isEmail(EmailAddress)
    }

const checkPhoneNumber=(PhoneNumber)=>{
    return validator.isMobilePhone(PhoneNumber)
}

const checkInquiry=(inquiry)=>{
    const inquired= parseInt(inquiry)
    if(inquired>=0 && inquired<inquiryList.length){
        return true
    }else{
        return false
    }
    }

const checkBody=(req, res,next)=>{
    let data=req.body

    let inquiryCheck=checkInquiry(data.inquiry)
    let emailCheck=checkEmail(data.EmailAddress)
    let phoneNumberCheck=checkPhoneNumber(data.PhoneNumber)
    let firstnameCheck=data.Firstname.length>0
    let secondnameCheck=data.Secondname.length>0

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


