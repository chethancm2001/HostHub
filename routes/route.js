const router  = require('express').Router()
const multer  = require('multer')

router.get('/',(req,res)=>{
    res.send('working from the router')
})

module.exports = router