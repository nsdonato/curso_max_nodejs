const path = require('path');
const express = require('express');
const rootDir = require('../utils/path');
// Productos
const adminData = require('./admin');

const router = express.Router();

router.get("/", (req,res,next) =>{
    // console.log("Lista de productos: " + adminData.products);
    // res.sendFile( path.join(rootDir,'views','shop.html'));
    const products = adminData.products;
    res.render('shop', {prods: products, docTitle: "Shop" });
});

module.exports = router;