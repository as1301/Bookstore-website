const route = require('express').Router()

route.use('/users', require('./users'))
route.use('/login',require('./login'))
route.use('/home',require('./home'))
route.use('/wish',require('./wish'))
route.use('/search',require('./search'))
route.use('/filterc',require('./filterc'))
route.use('/filterp',require('./filterp'))
route.use('/messages',require('./messages'))
route.use('/smessage',require('./smessage'))
route.use('/listing',require('./listing'))

exports = module.exports = {
    route
}