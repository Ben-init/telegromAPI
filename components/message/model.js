const { Schema, model } = require('mongoose');

const messageSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    chat: {
        type: Schema.Types.ObjectId,
        ref: 'chat'
    },
    message: String,
    file: String,
    date: Date,
    modified: Date,
});

const Model = model('message', messageSchema);

module.exports = Model;