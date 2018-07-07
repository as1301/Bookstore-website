const User = require('../../db').User
const route = require('express').Router()

route.get('/', (req, res) => {
    // We want to send an array of all users
    // From our database here

    User.findAll()
        .then((users) => {
            res.status(200).send(users)
        })
        .catch((err) => {
            res.status(500).send({
                error: "Could not retrive users"
            })
        })
    // res.redirect('https://www.youtube.com/')

})


route.post('/', (req, res) => {
    
    User.findAll({
      where : {
        email : req.body.email,
        password : req.body.password
      }
    }).then((users) => {
      console.log(users.length)
      res.status(200).send(users)
      if(users.length > 0){
        console.log("user found")
        
      }else{
        console.log("no such user")
      }
       })
  .catch((err) => {
      res.status(500).send({
          error: "Could not retrive users"
      })
  })

})
exports = module.exports = route