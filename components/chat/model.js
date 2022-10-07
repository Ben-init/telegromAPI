const { Schema, model } = require('mongoose');

const chatSchema = new Schema({
    users:[ {
        type: Schema.Types.ObjectId,
        ref: 'user'
    }],
    messages: [{
        type: Schema.Types.ObjectId,
        ref: 'message'
    }],
    date: Date,
    modified: Date,
});

const Model = model('chat', chatSchema);

module.exports = Model;