const express = require("express");

const Book = require('../model/book');
const router = new express.Router();




// insert data
router.post('/books', async (req, resp) => {

    try {
      const book = new Book(req.body);
      const addBook = await book.save();
      resp.status(201).send(addBook);
    } catch (error) {
      resp.status(400).send(error);
    }
  })
  
  // show multi data 
  
  router.get('/books', async (req, resp) => {
    try {
      const showBooks = await Book.find();
      resp.send(showBooks);
    } catch (error) {
      resp.send(error);
    }
  })
  
  // show singel gata
  
  router.get('/books/:bpageno', async (req, resp) => {
    try {
      const page = req.params.bpageno;
      const showbook = await Book.findOne({ bpageno:page })
      resp.status(201).send(showbook)
    } catch (error) {
      resp.status(500).send(error)
    }
  })
  
  // delete data
  
  router.delete('/books/:id', async (req,resp)=>{
    try {
    const deleteBook = await Book.findByIdAndDelete(req.params.id);
    resp.status(200).send(deleteBook);
    } catch (error) {
      resp.status(500).send(error)
    }
  })
  
  // update data
  
  router.patch('/books/:id', async (req,resp)=>{
    try {
      const _id = req.params.id;
       const updateBook = await Book.findByIdAndUpdate(_id,req.body,{
        new : true
       });
       resp.status(200).send(updateBook)
    } catch (error) {
      resp.status(500).send(error);
    }
  });

module.exports = router;