const mongoose = require('mongoose');

const groupSchema = new mongoose.Schema({
    user: {
        id: mongoose.Schema.Types.ObjectId,
        ref: 'Users'
    },
    phone: {
        type: String
    },
    genres: [{
        name: {
            type: String,
            required: true
        }
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