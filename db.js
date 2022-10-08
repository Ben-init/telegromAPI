const mongoose = require('mongoose');

const { config } = require('./config');

const ConnectDB = async () => {
    try {
        await mongoose.connect(config.dbUrl);
        console.log('DB connected!!');
    } catch (err) {
        console.log('Failed to connect to DB', err);
    }
};

module.exports = ConnectDB;
