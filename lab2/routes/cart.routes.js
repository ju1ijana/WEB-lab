var express = require('express');
var router = express.Router();

const data = require('../data/data.js');

router.get('/', function (req, res, next) {
   res.redirect('cart/getAll');
});

router.get('/getAll', function (req, res, next) {
   if (!req.session.cart) req.session.cart = Array.from({ length: 50 }, () => 0);
   res.render('cart', { data: data.categories, cart: req.session.cart });
});

router.get('/add/:id', function (req, res, next) {
   if (!req.session.cart) req.session.cart = Array.from({ length: 50 }, () => 0);
   var id = parseInt(req.params.id);
   req.session.cart[id - 1] += 1;
   res.redirect('/cart/getAll');
});

router.get('/remove/:id', function (req, res, next) {
   if (!req.session.cart) req.session.cart = Array.from({ length: 50 }, () => 0);
   var id = parseInt(req.params.id);
   if (req.session.cart[id - 1] >= 1) {
      req.session.cart[id - 1] -= 1;
      res.redirect('/cart/getAll');
   } else {
      res.end();
   }
});

module.exports = router;
