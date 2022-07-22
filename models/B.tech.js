
const mongoose = require('mongoose');




//define schema
const BtechSchema = new mongoose.Schema({
    

       username:{type:String, 
              required:true},
       email:{type:String,required:true},
       mobile:{type :String,required:true},
       address:{type :String,required:true},
       gender:{type :String,required:true},
       college:{type :String,required:true},
       course:{type :String,required:true},
       branch:{type :String,required:true},
       user_id:{type:String},
       status:{type:String, default:"pending"},
      
       
   
},{timestamps:true});
//Defining token

const btechModel = mongoose.model('Btech' , BtechSchema)


module.exports = btechModel