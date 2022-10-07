const Model = require('./model');

async function addChat(chat) {
    const myChat = new Model(chat);
    await myChat.save();
}

 async function getChat(id) {
    const chat = await Model.findById(id);
    return chat;
}

async function allChat(filter) {
    try {
        const chats = await Model.find(filter)
            .populate('users')
            .populate('messages');
        return chats;
    } catch (err) {
        console.error(err)
    }
}

async function updateChat(chat) {
    const updatedChat = await chat.save();
    return updatedChat;
}

async function deleteChat(id) {
    try {
        await Model.findByIdAndDelete(id);
        return { 
            id: id ,
            message: 'Chat deleted'
        };
    } catch (error) {
        console.error(error);
    }
}

async function existsChat(id) {
    const exists = await Model.exists({
        _id: id,
    });
    return exists;
}

module.exports = {
    add: addChat,
    get: getChat,
    getAll: allChat,
    update: updateChat,
    remove: deleteChat,
    exists: existsChat,
}