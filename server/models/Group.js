const mongoose = require('mongoose');

const groupSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String
    },
    genres: [{
            type: String,
            required: true
    }],
    rate: {
        type: Number,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    groupImg: {
        type: String 
    },
    socials: {
        instagram: {
            type: String
        },
        facebook: {
            type: String
        }
    }
});

module.exports = mongoose.model('Group', groupSchema);