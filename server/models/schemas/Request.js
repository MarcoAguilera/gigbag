const mongoose = require('mongoose');

const requestSchema = new mongoose.Schema({
    date: {
        type: Date,
        default: Date.now
    },
    location: {
        type: String,
        required: true
    },
    hours: {
        type: Number
    },
    sentBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users' 
    }
});

module.exports = requestSchema;