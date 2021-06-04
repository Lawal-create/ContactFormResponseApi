const express=require("express")
const inquiryList=["I have a question about the service","I have a problem with the API","I have an issue with the product that needs to be resolves urgently","I have a minor problem","My inquiry isn't amongst the ones mentioned above"]
const schemas=require(`../models/contact_schema`)

getSpecificData=(req,res)=> {
    res.send("Server is working perfectly at port 3000...")
}


saveFormData=(req, res)=> {
        let value = req.body
        const index = parseInt(value.inquiry)
        value.inquiry = inquiryList[index]

        let testContact = new schemas(value)
        res.status(200).json(value)

        testContact
            .save()
            .then(doc => {
                console.log(doc)
            }).catch(err => {
                console.log("ERROR",err)
            })
    }

    module.exports={
        saveFormData,
        getSpecificData,
        inquiryList
    }


