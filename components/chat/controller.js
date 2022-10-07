const store = require('./store');

async function addChat(users, messages) {

    if (!Array.isArray(users) && !Array.isArray(messages)) {
        throw new Error('[chat controller] no users or messages');
    } 
    if (users.length < 1 ) {
        throw new Error('[chat controller] requires 2 or more users');
    }
    const fullChat = {
        users: users,
        messages: messages,
        date: new Date(),
    }
    await store.add(fullChat);

    return fullChat;
}

async function getChat(id) {
    const chat = await store.get(id);
    return chat;
}

async function getAllChat(filterUser) {
    const filter = {};
    if (filterUser) {
        filter.user = filterUser;
    }
    const chats = await store.getAll(filter);
    return chats;
}

async function updateChat(id) {
//
}

async function deleteChat(id) {
    try {
        const chat = await store.exists(id);
        if (!id || !chat) {
            throw new Error('[chat controller] invalid or missing params');
        }
        const deletedChat = await store.remove(id);
        return deletedChat;
    } catch (error) {
        console.error(error);
    }
}

module.exports = {
    addChat,
    getChat,
    getAllChat,
    updateChat,
    deleteChat
}