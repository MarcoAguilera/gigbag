const mongoose = require('mongoose');
const conversationSchema = require('./schemas/Conversation');
const requestSchema = require('./schemas/Request');

const profileSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users'
    },
    request: [{ type: requestSchema }],
    inbox: [{ type: conversationSchema }],
    groupId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Groups'
    }
});

module.exports = mongoose.model('Profile', profileSchema);