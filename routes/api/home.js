const book = require('../../db').book
const route = require('express').Router();

route.get('/', (req, res) => {
    // Get all products
    book.findAll()
        .then((books) => {
            res.status(200).send(books)
        })
        .catch((err) => {
            res.status(500).send({
                error: "Could not retrieve books"
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
    book.create({
        seller : req.body.seller,
        name: req.body.name,
        author: req.body.author,
        price: parseFloat(req.body.price),
        condition : req.body.condition,
        image : req.body.img,
        description : req.body.desc
    }).then((book) => {
        res.status(201).send(book)
    }).catch((error) => {
        res.status(501).send({
            error: "Error adding book"
        })
    })
})

exports = module.exports = route