const express = require('express');
const hbs = require ('hbs');
require('./db/conn');
const app = express();
const bodyparser = require('body-parser')

const router = require('./db/routers/books_router');
const port = process.env.PORT || 5000

//set hbs

app.set('view engine', 'hbs');
app.set('views','views');
hbs.registerPartials('views');

// app use
app.use(bodyparser.urlencoded({
  extended:true
}))
app.use(express.json());
app.use('/',router);


// localhost connect

app.listen(port, () => {
  console.log(`server start on port number ${port}`);
});
