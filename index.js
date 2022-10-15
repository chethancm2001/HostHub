const express = require('express')
const app = express()
const router = require('./routes/route')

app.use(express.urlencoded())
app.use(express.json())
app.use('/',router)


app.listen(4000,(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log('server is runing on port 4000')
    }
})