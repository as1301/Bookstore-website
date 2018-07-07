//to send new messages

const msg = require('../../db').msg
const route = require('express').Router()

route.post('/', (req, res) => {

    msg.create({
        message : req.body.msg,
        to : req.body.to,
        from : req.body.from,

    }).then((msg) => {
        res.status(201).send(msg)
    }).catch((err) => {
        res.status(501).send({
            error: "Could not send messaage"
        })
    })
})

exports = module.exports = route