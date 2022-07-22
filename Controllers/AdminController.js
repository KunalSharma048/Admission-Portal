const btechModel = require('../models/B.tech.js');
const userModel = require('../models/User.js');

class AdminController{
    static dashboard = async (req , res)=>{
        try{
            const result = await btechModel.find()
            res.render('admin_college/dashboard',{data1:result})
        }catch(err){
            console.log(error);
        }
    }
    static delete=async(req,res)=>{
        try{
            console.log(req.params.id)
            const result=await btechModel.findByIdAndDelete(req.params.id,req.body);
            res.redirect('/admin_college/dashboard');

        }catch(err){
            console.log(err)
        }
    }  
    }

module.exports = AdminController