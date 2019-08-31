const path = require('path');
const express = require('express');
const rootDir = require('../utils/path');

const router = express.Router();

const products = [];

// /admin/add-producto -> GET
router.get("/add-product", (req,res) =>{
    res.sendFile( path.join(rootDir,'views','add-product.html'));
});

// /admin/producto -> POST  
router.post("/add-product", (req,res) =>{
    console.log("Nuevo producto: " + req.body.title);
    products.push({ title: req.body.title });
    res.redirect('/');
});11

exports.routes = router;
exports.products = products;