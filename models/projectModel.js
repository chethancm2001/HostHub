const mongoose = require('mongoose')

let projectSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,

    },
    url:{
        type:String,
        required:true,
    },
    user:{
     type:mongoose.Types.ObjectId,
     ref:"User",
     required:true
    }
})

let projectModel = mongoose.model('Project',projectSchema)
module.exports = projectModel