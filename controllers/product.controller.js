const Product = require("../models/product.model")

//Test controller
exports.test = function (req, res, next) {
    res.send("Greetings from the Test controller!")
}

//Create Controller
exports.product_create = function (req, res, next) {
    let product = new Product(
        {
            name: req.body.name,
            price: req.body.price
        }
    );

    product.save(function (err) {
        if (err)
            return next(err)

        res.send("Product Created successfully")
    })
}

//Get Controller
exports.product_details = function (req, res) {
    Product.findById(req.params.id, function (err, product) {
        if (err) return next(err)
            res.send(product)
    })
}