const exphbs = require('express-handlebars');
const express = require('express');
const path = require('path');
// * link router 
const productRoute = require('./server/routes/productRoute');
const homeRoute = require('./server/routes/homeRoute');

const app = express();
const port = 5000;

// * express-handlebars
app.engine('.hbs', exphbs({extname: '.hbs'}));
app.set('view engine', '.hbs');

// * config router
app.use('', productRoute);
app.use('', homeRoute);


// * config path
app.set('views', path.join(__dirname, '/client/views/'));
app.use(express.static(__dirname + '/client/public/'));

// * connect database
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});