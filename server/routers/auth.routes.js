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
                    name: {$in: req.body.roles}
                }, (err, roles) => {
                    if (err) {
                        res.status(500).send({message: err});
                        return;
                    }
                    user.roles = roles.map(role => role._id);
                }
            );
            await user.save(err => {
                if (err) {
                    res.status(500).send({message: err});
                    return;
                }
                res.send({message: "User was registered successfully!"});
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
            const {email, password} = req.body;
            const user = await User.findByCredentials(email, password)
            if (!user) {
                return res.status(401).send({error: 'Login failed! Check authentication credentials'})
            }
            const token = await user.generateAuthToken();
            res.send({user, token})
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
            const {username} = req.body;

            //Generate random password
            const password = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

            const user = new User({username, password});

            await Role.find({
                    name: "guest"
                }, (err, roles) => {
                    if (err) {
                        return res.status(500).send({message: err});
                    }
                    user.roles = roles.map(role => role._id);
                }
            );

            await user.save(err => {
                if (err) {
                    console.log("erreur")
                    return res.status(500).send({message: err});
                } else {
                    const token = jwt.sign({_id: user._id}, config.secret)
                    res.send({user, token})
                }
            });


        } catch (e) {
            return res.status(400).send({message: "bad request"})
        }
    }
);


router.get('/auth/check',
    [middlewares.auth.verifyToken],
    (req, res) => {
        // Check user authenticated
        res.status(200).send()
    })


/*
router.get('/users', async (req, res) => {
    try {
        const users = await User.find({})
        res.status(201).send(users)
    } catch (error) {
        res.status(400).send(req.body + ' ; error : ' + error)
    }
})

router.get('/users/me', auth, (req, res) => {
    // View logged in user profile
    try {
        res.send({user})
        const user = {
            name: req.user.name,
            email: req.user.email
        }
    } catch (e) {
        res.status(400).send(req.body + ' ; error : ' + e)
    }
})

router.get('/users/:id', async (req, res) => {
    try {
        const user = await User.find({_id: req.params.id})
        res.status(201).send(user)
    } catch (error) {
        res.status(400).send(req.body + ' ; error : ' + error)
    }
})

router.post('/users/me/logout', auth, async (req, res) => {
    // Log user out of the application
    try {
        req.user.tokens = req.user.tokens.filter((token) => {
            return token.token !== req.token
        })
        await req.user.save()
        res.send()
    } catch (error) {
        res.status(500).send(error)
    }
})

router.post('/users/me/logoutall', auth, async (req, res) => {
    // Log user out of all devices
    try {
        req.user.tokens.splice(0, req.user.tokens.length)
        await req.user.save()
        res.send()
    } catch (error) {
        res.status(500).send(error)
    }
})
*/

module.exports = router
