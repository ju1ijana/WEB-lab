const express = require('express');
const session = require('express-session');
const app = express();
var path = require('path');

const homeRouter = require('./routes/home.routes');
const cartRouter = require('./routes/cart.routes');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.use(
   session({
      secret: 'myKey',
      resave: false,
      saveUninitialized: true,
      cookie: {
         secure: false,
         maxAge: 10 * 60 * 1000,
      },
   })
);

app.use('/home', homeRouter);
app.use('/cart', cartRouter);

app.listen(3000);
