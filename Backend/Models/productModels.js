const mongoose = require("mongoose");
const shortid = require("shortid");

const dbUrl = "mongodb+srv://newuser:murad1979@nosql.8m48y.mongodb.net/react-shopping-product-db?retryWrites=true&w=majority"

try {
    mongoose.connect(dbUrl, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    });
    console.log("Connect is succesfull")
}
catch {
    console.log("Connect is failed");
}


const Product = mongoose.model("product", new mongoose.Schema({
    _id: { type: String, default: shortid.generate },
    compony_name: String,
    product_catogory: String,
    product_name: String,
    product_img: String,
    product_real_link: String,
    product_alt: String,
    product_description: String,
    product_price: Number
})
);

module.exports = Product;