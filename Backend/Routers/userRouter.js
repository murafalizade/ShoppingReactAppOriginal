const express = require("express");
const Router = express.Router();
const registerController = require('../Controllers/registerController');
const verify = require('../Middlevares/verify');
const adminVerify = require('../Middlevares/adminVerify');

Router.get('/:id', registerController.getOne);
Router.get('/', registerController.getAll);
Router.delete('/',adminVerify, registerController.deleteALL);
Router.delete('/:id', registerController.deleteOne);

module.exports = Router;