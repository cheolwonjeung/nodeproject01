const mongoose = require('mongoose');
const Product = require('../models/product');
const express = require('express');
const { generatePath } = require('react-router-dom');
const app = express()


//rendering product input form
exports.getFormProduct = async (req, res, next) => {
    
    res.render("admin/create");

    
 }
  


//save process// put data into mongoDB
exports.postAddProduct = async (req, res, next) => {
    const name = req.body.name;
    
    const price = req.body.price;
    
    const productData = new Product({
      name : name,
      price: price,
    });

    
    productData.save();
    
    res.redirect("/home");
    
 }
  
 //fetch process // fetching from mongoDB
 exports.getAddProducts = async (req, res, next) => {

    try {
      const {name, price} = await Product.find()
  
      res.render("admin/product", {
        pageTitle : "Admin Products",
        name : name,
        price : price,
        path : "/product",
      });
    } catch (err) {
      console.log(err);
    }
  };




// exports.product_create = function (req, res) {
    let product = new Product(
        {
            name: req.body.name,
            price: req.body.price
        }
    );

//     product.save(function (err) {
//         if (err) {
//             return next(err);
//         }
//         res.send('Product Created successfully')
//     })
// };



// exports.product_details = function (req, res) {
//     Product.findById(req.params.id, function (err, product) {
//         if (err) return next(err);
//         res.send(product);
//     })
// };


// exports.product_update = function (req, res) {
//     Product.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, product) {
//         if (err) return next(err);
//         res.send('Product udpated.');
//     });
// };


// exports.product_delete = function (req, res) {
//     Product.findByIdAndRemove(req.params.id, function (err) {
//         if (err) return next(err);
//         res.send('Deleted successfully!');
//     })
// };


// exports.product_input = function (req, res) {
     
//      res.send(product);
//     })



