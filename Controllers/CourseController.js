const bcrypt = require('bcrypt')
const btechModel = require('../models/B.tech.js')

const JsonWebTokenError = require('jsonwebtoken/lib/JsonWebTokenError.js')
const userModel = require('../models/User.js')

class CourseController {
    static Btech = async (req, res) => {
        try{
            const data = req.user
            const result = await userModel.findOne()
        
        res.render('course/Btech',{data1:data});
        }catch(error){
            //console.log(error);
        }
   
}

static Btechinsert = async (req, res) => {
    //console.log(req.body);

    try {
        const { username, email, mobile, address, gender, college, course, branch ,user_id} = req.body
        
        

        const result = new btechModel({
            username: username,
            email: email,
            mobile: mobile,
            address: address,
            gender: gender,
            college: college,
            course: course,
            branch: branch,
            user_id: user_id
        })
        //save data
        await result.save()
        req.flash('error' , 'sign up successfully')
        res.redirect('/course/displaybtech')
    

    } catch (err) {
        console.log(err);
    }
}

static displaybtech = async (req, res) => {
    try{
        const {_id} = req.user;
        const result = await btechModel.find({user_id:_id})
    //console.log(result);
    res.render('course/displaybtech', { data1: result })
}catch(error){
    //console.log(err);
}

}

static Btechview = async (req, res) => {
    // console.log(req.params.id)
    try {
        const result = await btechModel.findById(req.params.id)
        res.render('course/view', { data1: result });
    } catch (err) {
        console.log(err);
    }
}
static Btechedit = async(req,res)=>{
    // console.log(req.params.id)
    try{
        const {_id} = req.user
        const result = await btechModel.findOne({user_id:_id})
        // console.log(result);
        res.render('course/edit',{data1:result});
    
    }catch(error){
        //console.log(error);
    }
    
    
}
static Btechupdate = async(req , res)=>{
    //console.log(req.params.id);
    console.log(req.body);
    try{
        const result = await btechModel.findByIdAndUpdate(req.params.id, req.body)
        
        res.redirect('/course/displaybtech')
    }catch(error){
        console.log(error);
    
}
}
//M.Tech 
static Mtech = async (req, res) => {
    try{
        const data = req.user
        const result = await userModel.findOne()
    
    res.render('course/Mtech',{data1:data});
    }catch(error){
        //console.log(error);
    }

}

//mba
static Mba = async (req, res) => {
    try{
        const data = req.user
        const result = await userModel.findOne()
    
    res.render('course/Mba',{data1:data});
    }catch(error){
        //console.log(error);
    }

}


}
module.exports = CourseController
