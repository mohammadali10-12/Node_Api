const { application } = require("express");
const express = require("express");

const router = new express.Router();

const Book = require('../model/book');
const user = require('../model/user');




router.get('/',(req,resp)=>{
  resp.render('index');
})

router.get('/addAndEdit',(req,resp)=>{
  resp.render('addAndEdit');
});

// view data
router.get('/addData', async (req,resp)=>{
  const detail = await user.find();
  resp.render('addData',{
  title:'USERS DETAILS',
  users:detail
  })
});

// insert data
router.post('/add', async (req,resp)=>{
  try {
    const addData = await user.create(req.body);
    const data = await addData;
    resp.status(200).redirect('/addData');
   
  } catch (error) {
    resp.status(500).send(error)
  }
});

// update data

router.get('/addData/:id',  (req,resp)=>{
    try {
      
       user.findById(req.params.id,(err,doc)=>{
        if (!err) {
          resp.render('addData',{
            viewTitle:'Update Data',
            view:doc
          });
        }
      });
     
      resp.status(200).send(data);
    } catch (error) {
      resp.status(500).send(error);
    }
})

// insert data
// router.post('/books', async (req, resp) => {

//     try {
//       const book = new Book(req.body);
//       const addBook = await book.save();
//       resp.status(201).send(addBook);
//     } catch (error) {
//       resp.status(400).send(error);
//     }
//   })
  
//   // show multi data 
  
//   router.get('/books', async (req, resp) => {
//     try {
//       const showBooks = await Book.find();
//       resp.send(showBooks);
//     } catch (error) {
//       resp.send(error);
//     }
//   })
  
//   // show singel gata
  
//   router.get('/books/:bpageno', async (req, resp) => {
//     try {
//       const page = req.params.bpageno;
//       const showbook = await Book.findOne({ bpageno:page })
//       resp.status(201).send(showbook)
//     } catch (error) {
//       resp.status(500).send(error)
//     }
//   })
  
//   // delete data
  
//   router.delete('/books/:id', async (req,resp)=>{
//     try {
//     const deleteBook = await Book.findByIdAndDelete(req.params.id);
//     resp.status(200).send(deleteBook);
//     } catch (error) {
//       resp.status(500).send(error)
//     }
//   })
  
//   // update data
  
//   router.patch('/books/:id', async (req,resp)=>{
//     try {
//       const _id = req.params.id;
//        const updateBook = await Book.findByIdAndUpdate(_id,req.body,{
//         new : true
//        });
//        resp.status(200).send(updateBook)
//     } catch (error) {
//       resp.status(500).send(error);
//     }
//   });

module.exports = router;