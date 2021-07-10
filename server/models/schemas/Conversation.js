const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    sentBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users'
    },
    body: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const conversationSchema = new mongoose.Schema({
    history: [{ type: messageSchema }],
    users: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Users' }]
});

module.exports = conversationSchema;