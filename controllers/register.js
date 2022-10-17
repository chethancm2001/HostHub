const userModel = require('../models/userModel')
const fs = require('fs')
const path = require('path')

async function register(req,res){
let {name ,email ,password} = req.body
console.log({name,email,password})
let user = new userModel({name,email,password})



try{

    let result = await user.save()
    let folder = path.join(__dirname,'../','/public',result.id)
    console.log(folder)
    fs.mkdir(folder,(err)=>{
        console.log(err)
    })
  
    return res.json({"result":result})

}catch(exp){
    
    if(exp.code == '11000'){
        return res.status(409).json({"message":"email is already prasent"})
         }
        
     return res.status(409).json({message:exp})
}

}
module.exports = register