const express=require("express")
const { deleteOne } = require("../models/userContactSchema.js")
express()
const inquiryList=["I have a question about the service","I have a problem with the API","I have an issue with the product that needs to be resolves urgently","I have a minor problem","My inquiry isn't amongst the ones mentioned above"]
const schemas=require(`../models/userContactSchema.js`)


const getSpecificData=async(req,res)=> {

    let currentDay=new Date().getDay().toString()
    let currentMonth=new Date().getMonth().toString()
    let currentYear=new Date().getFullYear().toString()

    const search_value =req.query
    try{
        //filters the data passed 
        const results=await schemas.find(search_value)
        const count=await schemas.countDocuments(search_value)

        const result={
            Day:currentDay,
            Month:currentMonth,
            Year:currentYear,
            totalNoOfResponses:count,
            Result:results
        }
        res.status(200).json(
            result
        )

    }
    catch(error){

        res.status(500).json({
            status: 'failure',
            error: error.message
          });
    }
}
    

const saveFormData=(req, res)=> {

    //creates the user object using the schema
    let value = req.body
    const index = parseInt(value.inquiry)
    value.inquiry = inquiryList[index]
    let testContact = new schemas(value)
    
    //saves the data gotten to the database
    try{
        testContact.save()
        // res.status(200).json(testContact)
        res.status(200).send("Your response has been saved. Thank you for your time")


    } catch(error){
        res.status(500).send(error)
    }
}

module.exports={
    saveFormData,
    getSpecificData,
    inquiryList
}


