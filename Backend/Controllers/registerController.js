const User = require("../Models/userModel");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const validation = require('../Utils/validation')


module.exports.signPost = async (req, res) => {
    const { name, email, password } = req.body;
    let { isAdmin } = req.body;
    !isAdmin ? isAdmin = false : null;
    console.log(isAdmin)
    const { error } = validation.register(req.body)
    if (error) return res.status(400).send(error.details[0].message)
    const account = {
        name,
        email,
        password: await bcrypt.hash(password, 10),
        isAdmin
    }
    const newUser = new User(account);
    const saveUser = await newUser.save();
    const token = await jwt.sign({ id: saveUser._id, role: saveUser.isAdmin }, process.env.SECRETKEY);
    res.header('Header-Token', token).send(token);
}
//User.findOne({ email: req.body.email })

module.exports.loginPost = async (req, res) => {
    const { error } = validation.login(req.body)
    if (error) return res.status(400).send(error.details[0].message)
    const currentUser = await User.findOne({ email: req.body.email });
    if (currentUser) {
        const match = await bcrypt.compare(req.body.password, currentUser.password);
        if (match) {
            const token = await jwt.sign({ id: currentUser._id, role: currentUser.isAdmin }, process.env.SECRETKEY)
            res.status(200).send(token)
        }
        else {
            res.status(404).send("something went wrong");
        }
    }
}

module.exports.getAll = async (req, res) => {
    const allUsers = await User.find({})
    res.send(allUsers)
}

module.exports.getOne = async (req, res) => {
    const id = req.params.id;
    const user = await User.findOne({ _id: id });
    if (!user) return res.status(404).send('Not Founded')
    res.send(user)
}


module.exports.deleteALL = async (req, res) => {
    const deletedUser = await User.deleteMany()
    console.log(deletedUser)
    res.send({ msg: "succes" })
}
module.exports.deleteOne = async (req, res) => {
    const deletedUser = await User.deleteOne({ _id: req.params.id })
    console.log(deletedUser)
    res.send({ msg: "succes" })
}