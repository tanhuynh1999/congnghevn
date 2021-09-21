const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
//link router
const homeRoute = require('./server/routes/home');
const productRoute = require('./server/routes/product');

const app = express();
const port = 5000;


//express-handlebars
app.engine('.hbs', exphbs({extname: '.hbs'}));
app.set('view engine', '.hbs');

//config router
app.use('', homeRoute);
app.use('', productRoute);

//config path
app.set('views', path.join(__dirname, '/client/views/'));
app.use(express.static(__dirname + '/client/public/'));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});