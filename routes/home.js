var express = require('express');
var router = express.Router();



var products = require("../data/products.json");
var brands = require("../data/brands.json");
var cases = require("../data/cases.json")
const {route} = require("express/lib/router");

/* GET home page. */
router.get('/', function(req, res, next) {
    return res.render('home', { title: 'Express', products: products, brands: brands, cases: cases });
});

router.get('/product', function (req, res, next) {
    return res.render('product', {});
})

router.get('/goods', function (req, res, next) {
    return res.render('goods', { title: 'Express', products: products });
})




module.exports = router;
