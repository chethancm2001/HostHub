const router  = require('express').Router()
const register = require('../controllers/register')
const gitcontroller = require('../controllers/gitcontroller')
const login = require('../controllers/login')
router.get('/',(req,res)=>{
    res.send('working from the router')
})

router.post('/register',register)
router.post('/login',login)

router.post('/git-clone',gitcontroller)

module.exports = router