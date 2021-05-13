const express = require("express");
const Router = express.Router();
const Product  = require("../Models/productModels");
const API =  require("../DataBase/ProductData"); 


Router.get("/:brend", async (req,res)=>{
    const brend = req.params.brend;
    let findingProduct;
    if(API.brend.includes(brend)){
        findingProduct = await Product.find({ compony_name: brend });
    }
    else{
        findingProduct = await Product.find({ product_catogory: brend });
    }
    res.send(findingProduct);
})


module.exports = Router;