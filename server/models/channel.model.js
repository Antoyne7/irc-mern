const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const ChannelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        maxlength: 16
    },
    slug: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: false,
    },
    picture: {
        type: String,
        required: false,
    },
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    messages: [{
        message: {
            type: String,
            required: true,
        },
        date: {
            type: Date,
            required: true,
        },
        user:
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
                required: true
            }
    }],

    users: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    ]
});

ChannelSchema.pre("save", async function (next) {
    // Hash the password before saving the channel model
    const channel = this;
    if (channel.isModified("password")) {
        channel.password = await bcrypt.hash(channel.password, 8)
    }
    next()
})

module.exports = mongoose.model("Channel", ChannelSchema);