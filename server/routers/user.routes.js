const express = require('express')
const multer = require('multer')

const User = require('../models/user.model')
const Role = require('../models/role.model')
const middlewares = require('../middlewares')

const router = express.Router()

// Multer file storage
const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, 'uploads/users-pictures')
    },
    filename: (req, file, callback) => {
        callback(null, Date.now() + '-'+ file.originalname)
    }
})

const upload = multer({storage})

router.post('/profile/picture',
    [middlewares.auth.verifyToken, upload.single('picture')],
    async (req, res) => {
        // Save picture
        try {
            // console.log("req:", req)

            console.log("req.picture:", req.picture)

           /* upload(req, res, (err) => {
                if (err) {
                    res.sendStatus(500);
                }
                res.send(req.file);
            });*/
            res.status(200).send({message: "Enregistré avec succes"})
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
