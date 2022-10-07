const { Schema, model } = require('mongoose');

const messageSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    message: String,
    date: Date,
    modified: Date,
});

const Model = model('message', messageSchema);

module.exports = Model;