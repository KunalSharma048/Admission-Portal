const mongoose = require('mongoose');
//database_url="mongodb+srv://admission123:Vikas1234@cluster0.b0ibf.mongodb.net/Admission?retryWrites=true&w=majority"
// database_url="mongodb+srv://addmision12:Bansal1234@cluster0.gs1hmbo.mongodb.net/Admission?retryWrites=true&w=majority"
database_url="mongodb+srv://admission:LEGEND48@cluster0.vjdt8dp.mongodb.net/Admission?retryWrites=true&w=majority"
const connectDB = ()=>{
    return mongoose.connect(database_url)
    .then(()=>{
        console.log('Connection Successfully');
    })
    .catch((err)=>{
        console.log(err);
    })
}



module.exports = connectDB