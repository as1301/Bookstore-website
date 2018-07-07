const Sequelize = require('sequelize')

const DB ={
    password : process.env.password || 'pass',
    host : process.env.host || 'localhost' ,
    uname : process.env.uname || 'shopper' ,
    dbname : process.env.dbname || 'shopdb1' ,
}

const db = new Sequelize(DB.dbname, DB.uname, DB.password , {
    host: DB.host,
    dialect: 'mysql',
    pool: {
        min: 0,
        max: 5,
    }
})

const User = db.define('users', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    firstName: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    lastName:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    email:{
         type: Sequelize.STRING,
        allowNull: false,
    },
    password:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    college:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    phoneNumber:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    address:{
        type: Sequelize.STRING,
        allowNull: false,
    },
})

const book = db.define('books',{
    seller : {
        type: Sequelize.STRING,
        allowNull: false
    },
    name : {
        type: Sequelize.STRING,
        allowNull: false
    },
    author : {
        type: Sequelize.STRING,
        allowNull: false       
    },
    price : {
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue: 0.0
    },
    condition : {
         type : Sequelize.ENUM,
         values : ['new', 'almost new', 'slight damage','worn']
    },
    image : {
        type : Sequelize.STRING
    },
    description : {
        type : Sequelize.TEXT,
        // defaultValue : "no description available"
    }

})

const wish = db.define('wishlist',{
    seller : {
        type: Sequelize.STRING,
        allowNull: false
    },
    name : {
        type: Sequelize.STRING,
        allowNull: false
    },
    author : {
        type: Sequelize.STRING,
        allowNull: false       
    },
    price : {
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue: 0.0
    },
    condition : {
         type : Sequelize.ENUM,
         values : ['new', 'almost new', 'slight damage','worn']
    }

})

const msg = db.define('messages',{
    to : {
        type : Sequelize.STRING,
        allowNull: false
    },
    from : {
        type : Sequelize.STRING,
        allowNull: false 
     },
    message : {
        type : Sequelize.STRING,
        allowNull : false
    }
})

db.sync()
    .then(() => console.log("Database has been synced"))
    .catch((err) => console.error("Error creating database"))

exports = module.exports = {
    User , book ,wish ,msg
}