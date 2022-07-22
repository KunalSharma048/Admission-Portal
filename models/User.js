const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');


//define schema
const UserSchema = new mongoose.Schema({
    

       username:{type:String, required:true},
       email:{type:String,required:true, unique:true},
       password:{type :String,required:true},
     
       role:{
              type:String,
              default:1
          },

          tokens:[{
              token:{
                  type:String,
                  required:true
              }
              
          }]
   
},{timestamps:true});

//Defining token
UserSchema.methods.generateAuthToken = async function(){
       try{
           const token1 = jwt.sign({ _id:this._id.toString()}, 'pninfosys123');
           //console.log(this._id);
           this.tokens=this.tokens.concat({token:token1})
           await this.save()
           return token1
   
       }catch(error){
           console.log(error)
   
       }
   }

const userModel = mongoose.model('users',UserSchema)


module.exports = userModel;