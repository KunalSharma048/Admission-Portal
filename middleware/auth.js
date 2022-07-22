const jwt = require('jsonwebtoken')
const userModel = require('../models/User.js')


const auth = async(req , res , next)=>{
    try{
        const token = req.cookies.jwt;
        //console.log(token);
        const  verifyuser=jwt.verify(token,'pninfosys123')
        //console.log(verifyuser);
        const user = await userModel.findOne({_id:verifyuser._id})
        //console.log(user);
        req.user = user
        next();
    }catch(err){
        console.log(err);
    }
}

module.exports = auth;