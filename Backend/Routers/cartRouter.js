const express = require("express");
const Router = express.Router();
const cartController = require("../Controllers/cartController");
const verify = require('../Middlevares/verify');


Router.get("/:id/cart",  cartController.getAll);
Router.post("/:id/cart", cartController.postOne);
Router.delete("/:id/cart/:productId", cartController.deleteOne);

module.exports = Router;