const express = require('express')
const User = require('../models/user.model')
const Role = require('../models/role.model')
const middlewares = require('../middlewares')

const jwt = require("jsonwebtoken")
const config = require("../config/auth.config")

const router = express.Router()

router.post('/auth/signup', [
    middlewares.signup.checkRolesExisted,
    middlewares.signup.checkDuplicateUsernameOrEmail
], async (req, res) => {
    // Register a new user
    try {
        const user = new User(req.body);

        if (req.body.password !== req.body.passwordRepeat) {
            res.status(400).send(req.body + 'error: ' + req.body.password + ' ; ' + req.body.passwordRepeat)
        } else {
            await Role.find({
                name: { $in: req.body.roles }
            }, (err, roles) => {
                if (err) {
                    res.status(500).send({ message: err });
                    return;
                }
                user.roles = roles.map(role => role._id);
            }
            );
            await user.save(err => {
                if (err) {
                    res.status(500).send({ message: err });
                    return;
                }
                res.send({ message: "User was registered successfully!" });
            });
        }
    } catch (error) {
        res.status(400).send(req.body + error)
    }
})

router.post('/auth/signin',
    async (req, res) => {
        // Login a registered user
        try {
            const { firstCredential, password } = req.body;
            const user = await User.findByCredentials(firstCredential, password);
            if (!user) {
                return res.status(401).send({ error: 'Login failed! Check authentication credentials' })
            }
            const token = await user.generateAuthToken();
            res.send({ user: { username: user.username, picture: user.picture, roles: user.roles }, token })
        } catch (error) {
            res.status(400).send(error)
        }
    });

router.post('/auth/guest_login',
    [
        middlewares.signup.checkRolesExisted,
        middlewares.signup.checkDuplicateUsername
    ],
    async (req, res) => {
        try {
            const { username } = req.body;

            //Generate random password
            const password = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

            const user = new User({ username, password });

            await Role.find({
                name: "guest"
            }, (err, roles) => {
                if (err) {
                    return res.status(500).send({ message: err });
                }
                user.roles = roles.map(role => role._id);
            }
            );

            await user.save(err => {
                if (err) {
                    console.log("erreur")
                    return res.status(500).send({ message: err });
                } else {
                    const token = jwt.sign({ _id: user._id }, config.secret)
                    res.send({ user: { username: user.username, roles: user.roles }, token })
                }
            });


        } catch (e) {
            return res.status(400).send({ message: "bad request" })
        }
    }
);

// Check user authenticated, return user w/o password
router.get('/auth/check',
    [middlewares.auth.verifyToken],
    (req, res) => {
        const user = req.connectedUser
        user.password = ""
        
        res.status(200).send(user);
    })

module.exports = router
