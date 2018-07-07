//to display recieved messages

const msg = require('../../db').msg
const route = require('express').Router()

route.post('/', (req, res) => {
    
    msg.findAll({
      where : {
        to : req.body.username,
      }
    }).then((msg) => {
      res.status(200).send(msg)
       })
  .catch((err) => {
      res.status(500).send({
          error: "Could not retrive messages"
      })
  })

})

exports = module.exports = route