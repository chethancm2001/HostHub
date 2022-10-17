const {exec} = require('child_process')

function gitcontroller(req,res){
    let {url } = req.body
exec('cd ./public/ && git clone '+url,(error,stdout,stderr)=>{
    if(stdout){
       return res.send(stdout)
    }
    if(stderr){
        return res.send(stderr)
    }
    if(eror){
        return res.send(error)
    }
})

}
module.exports = gitcontroller