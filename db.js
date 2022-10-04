const mongoose = require('mongoose');

const { config } = require('./config');

const user = config.dbUser; 
const password = config.dbPassword;

const ConnectDB = async () => {
    try {
        await mongoose.connect(
            `mongodb+srv://${user}:${password}@cluster0.1anfhot.mongodb.net/?retryWrites=true&w=majority`
        );
        console.log('DB connected!!');
    } catch (err) {
        console.log('Failed to connect to DB', err);
    }
};

module.exports = ConnectDB;
