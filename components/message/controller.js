const store = require('./store');

async function addMessage(user, chat, message, file) {
    try {

        if (!user || !message || !chat) {
            throw new Error('[Controller] no data');
        }
        const fullMessage = {
            user: user,
            chat: chat,
            message: message,
            file: '',
            date: new Date(),
        }
        if (file) {
            fullMessage.file = `http://localhost:3000/app/files/${file.filename}`;
        }
        await store.add(fullMessage);
        return fullMessage;
    } catch (error) {
        console.error(error);
    }
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
        const message = await store.exists(id);
        if (!id || !message) {
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