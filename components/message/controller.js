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

async function getAllMessage(filterUser) {
    const filter = {};
    if (filterUser) {
        filter.user = filterUser;
    }
    const messages = await store.getAll(filter);
    return messages;
}

async function updateMessage(id, text) {
    try {

        if (!text || !id) {
            throw new Error('[Controller] invalid data')
        }
        
        const message = await store.get(id);
        message.message = text;
        message.modified = new Date();
        const updatedMessage = await store.update(message);
        return updatedMessage;
    } catch (error) {
        console.error(error);
    }
}

async function deleteMessage(id) {
    try {

        const messageIsTrue = await store.exists(id);
        console.log(messageIsTrue);
        if (!id || !messageIsTrue) {
            console.log('hola');
            throw new Error('[Controller] invalid or missing params')
        }
        const deletedMessage = await store.remove(id);
        return deletedMessage;
    } catch (error) {
        console.error(error);
    }
}

module.exports = {
    addMessage,
    getMessage,
    getAllMessage,
    updateMessage,
    deleteMessage
}