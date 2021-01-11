const mongoose = require("mongoose");

const ChannelSchema = new mongoose.Schema({
    title: String,
    picture: String,
    users: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    ]
});
module.exports = mongoose.model("Channel", ChannelSchema);