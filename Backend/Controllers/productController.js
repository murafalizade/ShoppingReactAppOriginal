const Product = require("../Models/productModels");

module.exports.getAll = async (req, res) => {
    const products = await Product.find({});
    res.send(products);

}


module.exports.postOne =  async (req, res) => {
    const newProduct = new Product(req.body);
    const saveProduct = await newProduct.save();
    res.send(saveProduct);
}

module.exports.deleteOne =  (req, res) => {
    id = req.params.id;
    Product.deleteMany({ _id: id }, (err, result) => {
        if (err)
            throw err;
        else
            res.send(result);
    })
}


module.exports.putOne = (req, res) => {
    const id = req.params.id;
    console.log(id);
    const newProduct = req.body;
    console.log(newProduct);
    Product.findOneAndUpdate({ _id: id }, {
        $set: {
            compony_name: newProduct.compony_name,
            product_catogory: newProduct.product_catogory,
            product_name: newProduct.product_name,
            product_img: newProduct.product_img,
            product_real_link: newProduct.product_real_link,
            product_description: newProduct.product_description,
            product_price: newProduct.product_price
        }
    }, { new: true }, (err, doc) => {
        if (err)
            throw err;
        console.log(doc);
        res.send(doc)
    });
}