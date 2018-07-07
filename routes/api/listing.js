const book = require('../../db').book
const route = require('express').Router();

route.post('/', (req, res) => {
    book.findAll({
        where : {
            id : req.body.id
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