
const mongoose = require('mongoose');



//define schema
const contactSchema = new mongoose.Schema({
    

       username:{type:String, required:true},
       email:{type:String,required:true, unique:true},
       mobile:{type :String,required:true},
       message:{type :String,required:true},
       
     
       role:{
              type:String,
              default:'student'
          },
   
},{timestamps:true});

const contactModel = mongoose.model('contact' , contactSchema)


module.exports = contactModel