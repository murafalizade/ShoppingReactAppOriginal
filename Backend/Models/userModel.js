const mongoose = require("mongoose");
const shortid = require("shortid");

const User = mongoose.model("user", new mongoose.Schema({
    _id:{ type: String, default: shortid.generate},
    name:String,
    email:String,
    password:String,
    isAdmin:{type:Boolean,required:true},
    date:{type:Date,default: Date()},
    cart:[]
}));


module.exports = User;