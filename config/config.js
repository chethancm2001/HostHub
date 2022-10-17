const mongoose = require('mongoose')
require('dotenv').config()
const connectDb = ()=>{
   
mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log('connected to db')
}).catch(()=>{
    console.log('error in connecting ot db')
})
}

module.exports = connectDb