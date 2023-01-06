const { application } = require("express");
const express = require("express");

const router = new express.Router();

const Book = require('../model/book');
const User = require('../model/user');



router.get('/',(req,resp)=>{
  resp.render('index');
})

router.get('/addAndEdit',(req,resp)=>{
  resp.render('addAndEdit');
});

// view data
router.get('/addData', async (req,resp)=>{
  const detail = await User.find();
  resp.render('addData',{
  title:'USERS DETAILS',
  users:detail
  })
});

// insert data
router.post('/addData', async (req,resp)=>{
  try {
    const addUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      city: req.body.city
    })
    const user = await addUser.save();
    req.flash("success", "Your message");
    resp.status(201).redirect('/addAndEdit');
  
  } catch (error) {
    resp.status(500).send(error)
  }
});

// 
router.get('/edit/:id', async (req,resp)=>{

  try {
    const editData = await User.findById(req.params.id);

  resp.render('edit',{
    title:'update Data',
    data:editData
  });
  // resp.status(201).render('edit');
  } catch (error) {
    resp.statu(500).send(error)
  }
  
})

// update data

router.post('/edit/:id', async (req,resp)=>{

    try {
 
     const _id = req.params.id;
     const userData = await User.findByIdAndUpdate(_id,req.body);
    
      resp.status(200);
      resp.redirect('/addData')
    
    } catch (error) {
      resp.status(500).send(error);
    }
})

// delete data

router.post('/edit/delete/:id', async (req,resp)=>{
  try {
       const _id = req.params.id;
       const deleteUser = await User.findByIdAndDelete(_id);
        
       resp.status(201);
       resp.redirect('/addData');

  } catch (error) {
    resp.status(500).send(error)
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