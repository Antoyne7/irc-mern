const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema({
    message: {
        type: String,
        required: true
    },
    user: {
        type: String,
        required: true
    },
    date: Date
});

module.exports = mongoose.model("Message", MessageSchema);