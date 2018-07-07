const book = require('../../db').book
const route = require('express').Router();
var Sequelize = require('sequelize');
const Op = Sequelize.Op;

route.post('/', (req, res) => {
    book.findAll({
        where : {
            [Op.or] : [{ name : { like : "%" + req.body.name + "%"}}, {author : { like : "%" + req.body.name + "%"}}]
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