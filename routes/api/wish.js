const wish = require('../../db').wish
const route = require('express').Router();

route.get('/', (req, res) => {
    // Get all products
    wish.findAll()
        .then((wishlist) => {
            res.status(200).send(wishlist)
        })
        .catch((err) => {
            res.status(500).send({
                error: "Could not retrieve wishlist"
            })
        })
})

route.post('/', (req, res) => {
    // Validate the values
    if (isNaN(req.body.price)) {
        return res.status(403).send({
            error: "Price is not valid number"
        })
    }
    // Add a new product
    wish.create({
        seller : req.body.seller,
        name: req.body.name,
        author: req.body.author,
        price: parseFloat(req.body.price),
        condition : req.body.condition
    }).then((wishlist) => {
        res.status(201).send(wishlist)
    }).catch((error) => {
        res.status(501).send({
            error: "Error adding product"
        })
    })
})

exports = module.exports = route