const express=require("express")
express()
const inquiryList=["I have a question about the service","I have a problem with the API","I have an issue with the product that needs to be resolves urgently","I have a minor problem","My inquiry isn't amongst the ones mentioned above"]
const schemas=require(`../models/userContactSchema.js`)


const getSpecificData=async(req,res)=> {
    try{
        //filters the data passed 
        const search_value =req.query
        const results=await schemas.find(search_value)
        const result={
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
        res.status(200).json(testContact)
        console.log(testContact)


    } catch(error){
        res.status(500).send(error)
    }
}

module.exports={
    saveFormData,
    getSpecificData,
    inquiryList
}


