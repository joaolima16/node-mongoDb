const {Router} = require('express')
const routes = Router();



routes.get('/teste',(req,res)=>{
    return res.json({msg: "teste"})
})
routes.post('/register',(req,res)=>{
    const {email , password} = req.body;
    if(!email){
            res.send("email não encontrado ")
    }
})

module.exports = routes