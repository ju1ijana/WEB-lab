var express = require('express');
var router = express.Router();

const data = require('../data/data.js');

let id = 0;

router.get('/', function (req, res, next) {
   if (!req.session.cart) req.session.cart = Array.from({ length: 50 }, () => 0);
   res.redirect('home/getCategories');
});

router.get('/getCategories', function (req, res, next) {
   if (!req.session.cart) req.session.cart = Array.from({ length: 50 }, () => 0);
   res.render('home', { categories: data.categories, index: id, cart: req.session.cart });
});

router.get('/getProducts/:id', function (req, res, next) {
   if (!req.session.cart) req.session.cart = Array.from({ length: 50 }, () => 0);
   id = parseInt(req.params.id) - 1;
   res.redirect('/home/getCategories');
});

router.get('/add/:id', function (req, res, next) {
   if (!req.session.cart) req.session.cart = Array.from({ length: 50 }, () => 0);
   var index = parseInt(req.params.id);
   req.session.cart[index - 1] += 1;
   id = Math.ceil(index / 5) - 1;
   res.redirect('/home/getCategories');
});

module.exports = router;
