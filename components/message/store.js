const mongoose = require('mongoose');

const Model = require('./model');
const { config } = require('./../../config');

const user = config.dbUser; 
const password = config.dbPassword;

console.log('db connected');

const connectDB = async () => {
    try {
        await mongoose.connect(
            `mongodb+srv://${user}:${password}@cluster0.1anfhot.mongodb.net/?retryWrites=true&w=majority`
        );
        console.log('DB connected!!');
    } catch (err) {
        console.log('Failed to connect to DB', err);
    }
};

connectDB();

async function addMessage(message) {
    const myMessage = new Model(message);
    await myMessage.save();
}

 async function getMessage(id) {
    const message = await Model.findById(id);
    return message;
}

async function allMessage(filter) {
    const messages = await Model.find(filter);
    return messages;
}

async function updateMessage(message) {
    const updatedMessage = await message.save();
    return updatedMessage;
}

module.exports = {
    add: addMessage,
    get: getMessage,
    getAll: allMessage,
    update: updateMessage
}