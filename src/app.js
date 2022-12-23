const express = require('express');
require('./db/conn');
const app = express();

const Books = require('./db/model/book');
const router = require('./db/routers/books_router');
const port = process.env.PORT || 5000

app.use(express.json());
app.use(router);


// insert data
app.post('/books', async (req, resp) => {

  try {
    const book = new Books(req.body);
    const addBook = await book.save();
    resp.status(201).send(addBook);
  } catch (error) {
    resp.status(400).send(error);
  }
})

// show multi data 

app.get('/books', async (req, resp) => {
  try {
    const showBooks = await Books.find();
    resp.send(showBooks);
  } catch (error) {
    resp.send(error);
  }
})

// show singel gata

app.get('/books/:bpageno', async (req, resp) => {
  try {
    const page = req.params.bpageno;
    const showbook = await Books.findOne({ bpageno:page })
    resp.status(201).send(showbook)
  } catch (error) {
    resp.status(500).send(error)
  }
})

// delete data

app.delete('/books/:id', async (req,resp)=>{
  try {
  const deleteBook = await Books.findByIdAndDelete(req.params.id);
  resp.status(200).send(deleteBook);
  } catch (error) {
    resp.status(500).send(error)
  }
})

// update data

app.patch('/books/:id', async (req,resp)=>{
  try {
    const _id = req.params.id;
     const updateBook = await Books.findByIdAndUpdate(_id,req.body,{
      new : true
     });
     resp.status(200).send(updateBook)
  } catch (error) {
    resp.status(500).send(error);
  }
})


app.listen(port, () => {
  console.log(`server start on port number ${port}`);
});