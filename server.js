const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require('cors');

const loginRouter = require("./Backend/Routers/LoginRouter");
const SignupRouter = require("./Backend/Routers/signupRouter");
const Filter = require("./Backend/Routers/apifilterRouter");
const CartRouter = require("./Backend/Routers/cartRouter");
const Product = require("./Backend/Routers/apiProductsRouter");
const UserRouter = require("./Backend/Routers/userRouter");

require('dotenv').config();

const app = express();
app.use(bodyParser.json());
app.use(cors());

//auth
app.use("/api/v1/login", loginRouter);
app.use("/api/v1/signup", SignupRouter);

//user
app.use("/api/v1/users", UserRouter);
app.use("/api/v1/users", CartRouter);

//product
app.use("/api/v1/products", Filter);
app.use("/api/v1/products", Product);

//app
app.use(express.static('build'))
app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});
// app.use(express.static('Client/build'));
// app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'Client', 'build', 'index.html'));
// })



const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Listen server in http://localhost:${port}`));