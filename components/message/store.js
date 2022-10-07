const Model = require('./model');

async function addMessage(message) {
    const myMessage = new Model(message);
    await myMessage.save();
}

 async function getMessage(id) {
    const message = await Model.findById(id);
    return message;
}

async function allMessage(filter) {
    try {

        const messages = await Model.find(filter).populate('user');
        return messages;
    } catch (err) {
        console.error(err)
    }
}

async function updateMessage(message) {
    const updatedMessage = await message.save();
    return updatedMessage;
}

async function deleteMessage(id) {
    const deletedMessage = await Model.deleteOne({
        _id: id,
    });
    return deletedMessage;
}

async function existsMessage(id) {
    const exists = await Model.exists({
        _id: id,
    });
    return exists;
}

module.exports = {
    add: addMessage,
    get: getMessage,
    getAll: allMessage,
    update: updateMessage,
    remove: deleteMessage,
    exists: existsMessage,
}