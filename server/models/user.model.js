const mongoose = require("mongoose");
const validator = require("validator")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const config = require("../config/auth.config")

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: false,
        unique: true,
        lowercase: true,
        validate: (value) => {
            if (!validator.isEmail(value)) {
                throw new Error({error: 'Invalid Email address'})
            }
        }
    },
    password: {
        type: String,
        required: false,
        minLength: 7
    },
    channels: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Channel"
        }
    ],
    roles: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Role"
        }
    ]
})

UserSchema.pre("save", async function (next) {
    // Hash the password before saving the user model
    const user = this
    if (user.isModified("password")) {
        user.password = await bcrypt.hash(user.password, 8)
    }
    next()
})


UserSchema.statics.findByCredentials = async (email, password) => {
    // Search for a user by email and password.
    const user = await User.findOne({email}).exec()
    if (!user) {
        throw new Error({error: 'Invalid auth credentials'})
    }
    const isPasswordMatch = await bcrypt.compare(password, user.password)
    if (!isPasswordMatch) {
        throw new Error({error: 'Invalid auth credentials'})
    }
    return user
}

UserSchema.methods.generateAuthToken = async function () {
    // Generate an auth token for the user
    const user = this
    const token = jwt.sign({_id: user._id}, config.secret)
    // user.tokens = user.tokens.concat({ token })
    // await user.save()
    return token
}

const User = mongoose.model("User", UserSchema);

module.exports = User
