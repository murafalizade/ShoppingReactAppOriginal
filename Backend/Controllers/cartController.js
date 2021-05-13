const User = require("../Models/userModel");

module.exports.getAll = async(req, res) => {
    const currentUser = await User.findOne({ _id: req.params.id });
    if(!currentUser) return res.status(404).send("Something went wrong !!!");
    res.send(currentUser.cart);
}

module.exports.postOne = async (req, res) => {
    let cart = req.body;
    cart.quantity = 1;
    const currentUser = await User.findOne({ _id: req.params.id });
    if (!currentUser) return res.status(404).send("Something went wrong !!!");
    console.log("first");
    cart.quantity = 1;
    currentUser.cart.push(cart);
    await currentUser.save();
    res.send(currentUser.cart);
}


module.exports.deleteOne = async (req, res) => {
    const productId = req.params.productId;
    const userId = req.params.id;
    let currentUser = await User.findOne({ _id: userId });
    if (!currentUser) return res.status(404).send("Something went wrong !!!");
    const newUser = currentUser.cart.filter(j => j._id !== productId);
    currentUser.cart = newUser;
    await currentUser.save();
    res.status(200).send({msg:"succes"});
}