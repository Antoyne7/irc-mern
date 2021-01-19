const express = require('express')
const multer = require('multer')
const bcrypt = require("bcryptjs")
const fs = require('fs')

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
            const oldPicturePath =
                __dirname + '/../uploads/users-pictures/' + req.connectedUser.picture
            if (fs.existsSync(oldPicturePath)) {
                fs.unlinkSync(oldPicturePath)
            }

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
        req.connectedUser.email = req.body.email
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

// Update theme
router.get('/profile/theme',
    [middlewares.auth.verifyToken],
    async (req, res) => {
        req.connectedUser.whiteTheme = (req.query.whiteTheme == "true")

        await req.connectedUser.save(err => {
            if (err) {
                res.status(500).send({ message: err });
                return;
            }
            res.status(200).send({ message: "Thème mis à jour." });
        });
    })

module.exports = router
