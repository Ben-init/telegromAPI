function addMessage(user, message) {

    if(!user || !message) {
        throw new Error('[message controller] no user or message');
    }
    const fullMessage = {
        user: user,
        message: message,
        date: new Date(),
    }
    return fullMessage;
}

module.exports = {
    addMessage,
}