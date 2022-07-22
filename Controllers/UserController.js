const userModel = require('../models/User.js')
const bcrypt = require('bcrypt')
const JsonWebTokenError = require('jsonwebtoken/lib/JsonWebTokenError.js')
const btechModel = require('../models/B.tech.js')


class UserController {
    

    static signup = async (req, res) => {
        res.render('signup', { message: req.flash('error') })
    }

    static UserInsert = async (req, res) => {
        //console.log(req.body);
        const { username, email, password, passconfirm } = req.body
        const user = await userModel.findOne({ email: email })
        if (user) {
            req.flash('error', 'this email already exits')
            return res.redirect('/signup')
        }
        else {
            if (username && email && password && passconfirm) {
                if (password === passconfirm) {
                    try {
                        const salt = await bcrypt.genSalt(10)
                        const hashPassword = await bcrypt.hash(password, salt)
                        const result = new userModel({
                            username: username,
                            email: email,
                            password: hashPassword
                        })
                        const token = await result.generateAuthToken();
                        //res.cookie('jwt',token)
                        await result.save()
                        req.flash('error', 'Sign up successfully')
                        return res.redirect('/')

                    } catch (error) {

                    }

                } else {
                    req.flash('error', 'password and confirm password does not match')
                    return res.redirect('/signup')
                }

            } else {
                req.flash('error', 'fill all requirements')
                return res.redirect('/signup')

            }

        }
    }
    static login = async (req, res) => {
        res.render('login', { message: req.flash('error') })
    }

    static userlogin = async (req, res) => {
        // console.log(req.body)

        try {
            const { email, password } = req.body
            if (email && password) {
                const user = await userModel.findOne({ email: email })
                //console.log(user);
                if (user != null) {
                    const isMatch = await bcrypt.compare(password, user.password)
                    if ((user.email == email) && isMatch) {
                        console.log(user)
                        if (user.role==1){
                            const token = await user.generateAuthToken();
                            //console.log(user);
                            res.cookie('jwt',token)
                            res.redirect('/dashboard')
                        }

                        if (user.role==0){
                            const token = await user.generateAuthToken();
                            //console.log(user);
                            res.cookie('jwt',token)
                            res.redirect('/admin_college/dashboard')
                        }
                        
                        
                        
                    } else {
                        req.flash('error', 'email or password not matched')
                        res.redirect('/')

                    }
                } else {
                    req.flash('error', 'you are not a registered user')
                    res.redirect('/')

                }
            }

        } catch (error) {
            console.log(error)
        }
    }
    static logout = async (req, res) => {
        try{
        //   console.log(req.user);
        //   req.user.tokens =req.user.token.filter(()=>{
        //     return currElement.token !== req.token
        //   })
          res.clearCookie("jwt");
          // console.log("Logout Successfully")
          res.redirect('/')
        }catch(error){
          res.status(500).send(error);
        }
      };
    static dashboard = async (req, res) => {
        try{
            const {_id, username, email, password } = req.user;
            const data = req.user
            
            var  register= await btechModel.findOne({course:'B.Tech', user_id:_id})
            //console.log(register)
            var  register1= await btechModel.findOne({course:'M.Tech',user_id:_id})
            var  register2= await btechModel.findOne({course:'MBA',user_id:_id})
            const result = await userModel.findOne()
        
        res.render('dashboard',{data1:data ,register:register,register1:register1,register2:register2});
        }catch(error){
            //console.log(error);
        }
    }

       

    

        

       
    
    
  

}





module.exports = UserController