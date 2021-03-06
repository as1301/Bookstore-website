//to filter by condition

const book = require('../../db').book
const route = require('express').Router();

route.get('/', (req, res) => {
    // Get all books
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
    book.findAll({
        where : {
            condition : req.body.condition
        }
      }).then((books) => {
        res.status(200).send(books)
         })
    .catch((err) => {
        res.status(500).send({
            error: "Could not retrive books"
        })
    })
    
})

exports = module.exports = route