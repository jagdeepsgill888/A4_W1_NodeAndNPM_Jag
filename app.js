const express = require('express'); // like a PHP require
const server = express();

server.get("/", (req, res) => {
  console.log('hit the home route');
  res.send('your first express app');
})

server.get("/contact", (req, res) => {
  console.log('hit the contact route');
  res.send('contact page');
})

// require is more or less the same as a JS import

// const hostname = '127.0.0.1'; // this is localhost
const port = process.env.PORT || 3000; //localhost:3000

server.listen(port, () => {
  console.log(`Server is now running at ${port}/`);
});