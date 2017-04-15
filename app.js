const express = require('express');


const app=express();
app.use(express.static('public'));
app.set('view engine','ejs');
//determine which pages you visited

// http://localhost:3000/
app.get('/', (request, response, next) => {
//  console.log('Go to http://localhost:3000/ in your browser to see this project');
  console.log('Thanks for visiting!');
  response.render('home.ejs');
});
app.get('/about', (request, response, next) => {
  response.render('about.ejs');
});
app.get('/gallery', (request, response, next) => {
  response.render('gallery.ejs');
});
app.get('/leave', (request, response, next) => {
  response.render('leave.ejs');
});
//ports
// http://localhost:3000
app.listen(3000);
