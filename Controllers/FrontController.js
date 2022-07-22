const btechModel = require('../models/B.tech.js');
const contactModel=require('../models/Contact.js');
const userModel = require('../models/User.js');
class FrontController{
    static home = async(req,res)=>{
        res.render('Home');
    }
    static about = async(req,res)=>{
        try{
            const {_id, username, email, password } = req.user;
            const data = req.user
            var  register= await btechModel.findOne({email:email})
            const result = await userModel.findOne()
        
        res.render('about',{data1:data ,register:register});
        }catch(error){
            //console.log(error);
        }
        
    }
    static gallery = async(req,res)=>{
        try{
            const {_id, username, email, password } = req.user;
            const data = req.user
            var  register= await btechModel.findOne({email:email})
            const result = await userModel.findOne()
        
        res.render('gallery',{data1:data ,register:register});
        }catch(error){
            //console.log(error);
        }
    }
    static login = async(req,res)=>{
        res.render('login');
    
    }

    static contact = async (req, res) => {
        try{
            const {_id, username, email, password } = req.user;
            const data = req.user
            var  register= await btechModel.findOne({email:email})
            const result = await userModel.findOne()
        
        res.render('contact',{data1:data ,register:register});
        }catch(error){
            //console.log(error);
        }
        
    }

    static Contactinsert = async (req, res) => {
        //console.log(req.body);

        try {
            const { username, email, mobile, message} = req.body
            const result = new contactModel({
                username: username,
                email: email,
                mobile: mobile,
                message:message
            })
            //save data
            await result.save()
            res.redirect('/contact')
        } catch (err) {
            console.log(err);
        }
    }

}

module.exports = FrontController