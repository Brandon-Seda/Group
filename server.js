require('dotenv').config();

const { mongoose } = require('mongoose');

let dbConnection

module.exports = {
    connectToDb: (cb) => {
        mongoose.connect('mongodb://localhost:27017/groupd')
        .then((client) => {
            dbConnection = client.db()
            return cb
        })
        .catch(err => {
            console.log(err)
            return cb(err)
        })
    },
    getDb: () => dbConnection
}

