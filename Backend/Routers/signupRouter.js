const express = require("express");
const Router =  express.Router();
const registerController = require('../Controllers/registerController');
 
Router.post("/", registerController.signPost)

module.exports = Router;