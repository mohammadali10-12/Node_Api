const mongoose = require('mongoose');
const validator = require('validator');

const books = new mongoose.Schema({

bname:{
    type:String,
    required:true
},
authorname:{
    type:String,
    required:true
},
bprice:{
    type:Number,
    required:true
},
bpageno:{
    type:Number,
    required:true
},
date:{
    type:Date,
    default:Date.now
}
})

const Book=  new mongoose.model('book_detail',books);

module.exports = Book;

// const creatDocument = async ()=>{

//     try {
//         const bookDetail = new Book({
//             bname:"c++",
//             authorname:"will thomas",
//             bprice:500,
//             bpageno:200
//         })
        
//         const result = await bookDetail.save();
//         console.log(result);
        
//     } catch (error) {
//         console.log(error);
//     }
// }

// creatDocument();
