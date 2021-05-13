const express = require("express");
const app = express.Router();
const productController = require("../Controllers/productController");
const adminVerify = require('../Middlevares/adminVerify');


app.get("/", productController.getAll);

app.post("/", adminVerify, productController.postOne);

app.delete("/:id", adminVerify, productController.deleteOne)

app.put("/:id", adminVerify, productController.putOne)

module.exports = app;