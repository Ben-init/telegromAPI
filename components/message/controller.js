const store = require('./store');

async function addMessage(user, message) {

    if (!user || !message) {
        throw new Error('[message controller] no user or message');
    }
    const fullMessage = {
        user: user,
        message: message,
        date: new Date(),
    }
    await store.add(fullMessage);

    return fullMessage;
}

async function getMessage(id) {

    const message = await store.get(id);
    return message;
}

async function getAllMessage() {
    const messages = await store.getAll();
    return messages;
}

module.exports = {
    addMessage,
    getMessage,
    getAllMessage
}