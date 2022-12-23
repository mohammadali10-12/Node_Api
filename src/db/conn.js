const mongoose = require('mongoose');
// const book = require('./model/book');
const url="mongodb://localhost:27017/book_api";

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
    autoIndex: false, // Don't build indexes
    maxPoolSize: 10, // Maintain up to 10 socket connections
    serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    family: 4 // Use IPv4, skip trying IPv6
  }
  mongoose.set('strictQuery', true);

  mongoose.connect(url,options).then(()=>{
    console.log('db connect successfully');
  }).catch((e)=>{
    console.log('db not onnected');
  })