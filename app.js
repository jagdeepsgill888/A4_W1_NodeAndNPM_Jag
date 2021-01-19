const { resolveSoa } = require('dns');
const express = require('express'); // like a PHP require
const server = express();
const path = require('path');


// set our views directory
server.set("views", path.join(__dirname, 'views'));

// set the static assets director so Express knows where to look
//
server.use(express.static(path.join(__dirname, 'public')));

server.get("/", (req, res) => {
  console.log('hit the home route');
  // res.send('your first express app');
  res.sendFile('views/index.html');
})

server.get("/contact", (req, res) => {
  console.log('hit the contact route');
  // res.send('contact page');
  res.sendFile('views/contact.html');
})

// require is more or less the same as a JS import

// const hostname = '127.0.0.1'; // this is localhost
const port = process.env.PORT || 3000; //localhost:3000

server.listen(port, () => {
  console.log(`Server is now running at ${port}/`);
});