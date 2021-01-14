const express = require('express')
const multer = require('multer')

const User = require('../models/user.model')
const Role = require('../models/role.model')
const middlewares = require('../middlewares')

const router = express.Router()

// Multer file storage
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'assets')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' +file.originalname)
    }
})
const upload = multer({ storage }).single('file')


router.post('/profile/picture',
    async (req, res) => {
        // Login a registered user
        try {
            const {email, password} = req.body;
            const user = await User.findByCredentials(email, password);
            // TODO: Obtenir user à partir du middleware


            res.send({user, token})
        } catch (error) {
            res.status(400).send(error)
        }
    });

router.get('/profile',
    [middlewares.auth.verifyToken],
    (req, res) => {
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

module.exports = router
