const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema({
    message: String,
    date: Date,
    user:
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
});

module.exports = mongoose.model("Message", MessageSchema);