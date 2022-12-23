const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

name:String,
email:String,
password:Number,
city:String

})

const User = new mongoose.model('user',userSchema);

module.exports = User;

// const newUser = async ()=>{
//     try {
//        const userDetail = new User({
//         name:'mohammadali',
//         email:'mohammadali@gmail.com',
//         password:12345,
//         city:'vaghrol'
//        })
//        const result = await userDetail.save();
//        console.log(result);
//     } catch (error) {
//         console.log(error);
//     }
// }

// newUser();