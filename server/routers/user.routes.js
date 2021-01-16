const express = require('express')
const multer = require('multer')
const bcrypt = require("bcryptjs")

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
        callback(null, Date.now() + '-' + file.originalname)
    }
})

const upload = multer({ storage })

// Update user picture
router.post('/profile/picture',
    [middlewares.auth.verifyToken, upload.single('picture')],
    async (req, res) => {
        try {
            // TODO: delete old picture

            req.connectedUser.picture = req.file.filename
            await req.connectedUser.save(err => {
                if (err) {
                    res.status(500).send({ message: err });
                    return;
                }
                res.status(201).send({ message: "L'avatar à été enregistré avec succès!" });
            });
        } catch (error) {
            res.status(400).send(error)
        }
    });

// Update user
router.post('/profile',
    [middlewares.auth.verifyToken],
    async (req, res) => {
        req.connectedUser.username = req.body.username
        if (req.body.password.length > 0) {
            console.log('0')
            if (req.body.password !== req.body.passwordRepeat) {
                res.status(500).send({ message: "Les mots de passe ne correspondent pas." });
                return;
            }

            if (!bcrypt.compareSync(req.body.oldPassword, req.connectedUser.password)) {
                res.status(500).send({ message: "Votre mot de passe est incorrect." });
                return;
            }

            req.connectedUser.password = req.body.password
        }

        await req.connectedUser.save(err => {
            if (err) {
                res.status(500).send({ message: err });
                return;
            }
            res.status(200).send({ message: "Profil mis à jour." });
        });
    })

module.exports = router
