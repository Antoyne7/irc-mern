const express = require('express');
const { Mongoose } = require('mongoose');
const middlewares = require('../middlewares')
const router = express.Router();
const Channel = require('../models/channel.model');
const User = require('../models/user.model');

router.post("/channel/add", [
    middlewares.channel.checkDuplicatedName,
    middlewares.channel.checkInvalidCharacter,
    middlewares.auth.verifyToken
],
    async (req, res) => {
        try {
            const channel = new Channel({
                name: req.body.name,
                slug: slugify(req.body.slug),
                password: req.body.password,
            });
            if (req.body.password && req.body.password !== req.body.passwordRepeat) {
                if (req.body.password.length < 4) {
                    res.status(400).send(req.body + 'Les mots de passe ne correspondent pas')
                }
                res.status(400).send(req.body + 'Le mot de passe doit faire au moins 4 caractères')
            }
            await User.findOne({
                username: req.body.username
            }, (err, creator) => {
                if (err) {
                    console.log(err);
                    return;
                }
                channel.creator = creator._id;
            });

            await channel.save(err => {
                if (err) {
                    console.log(err)
                    return;
                }
                res.send({ message: "Channel was saved successfully!", channel: channel.name, slug: channel.slug });
            })
        } catch (e) {
            res.status(400).send(e)
        }
    });

router.get("/channel/get",
    [middlewares.auth.verifyToken],
    async (req, res) => {
        try {
            let channel;
            channel = await Channel.findOne({slug: req.query.channel}).exec()
            if (!channel) { // recherche par ID également
                channel = await Channel.findOne({_id: req.query.channel}).exec()
            }
            if (!channel) {
                res.status(500).send({ error: "Aucun salon trouvé..." })
                return
            }
            res.status(200).send({ channel })
        } catch (error) {
            res.status(400).send(error)
        }
    }
)

router.get("/channel/search",
    // [middlewares.auth.verifyToken],
    async (req, res) => {
        if (req.query.search.length >= 3) {
            new Promise((resolve, reject) => {
                Channel.find(
                    { name: { $regex: req.query.search } },
                    (err, chanlist) => {
                        if (err) {
                            console.log(err);
                            return
                        }
                        let max = parseInt(req.query.maxresp);
                        if (max && !isNaN(max) && chanlist.length > max) {
                            chanlist.length = max
                        }
                        resolve(chanlist);
                        reject(err)
                    });
            }).then((response) => {
                return res.send(response)
            }).catch((err) => {
                console.log(err)
            })
        }
    }
);

router.post("/channel/message",
    [middlewares.auth.verifyToken],
    (req, res) => {
        res.json(
            {}
        )
    });

router.post("/channel/connect", 
    [middlewares.auth.verifyToken],
    async (req, res) => {
        try {
            const channel = await Channel.findOne({slug: req.body.slug}).exec()
            if (!channel) {
                res.status(500).send({error: "Le salon n'a pas été trouvé..."})
                return
            }

            if (req.connectedUser.channels.includes(channel._id)) {
                res.status(200).send({message: "Vous faites déjà partie de ce salon"})
                return
            }

            // TODO: Si channel mot de passe -> bcrypt.compareSync(req.body.password, channel.password)

            req.connectedUser.channels.push(channel._id)            
            channel.users.push(req.connectedUser._id)
            
            await req.connectedUser.save()
            await channel.save()

        } catch (e) {
            res.status(400).send(e)
        }
    });

const slugify = (string) => {
    const a = 'àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/,:;'
    const b = 'aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------'
    const p = new RegExp(a.split('').join('|'), 'g')

    return string.toString().toLowerCase()
        .replace(/\s+/g, '-') // Replace spaces with -
        .replace(p, c => b.charAt(a.indexOf(c))) // Replace special characters
        .replace(/&/g, '-and-') // Replace & with 'and'
        .replace(/[^\w\-]+/g, '') // Remove all non-word characters
        .replace(/\-\-+/g, '-') // Replace multiple - with single -
        .replace(/^-+/, '') // Trim - from start of text
        .replace(/-+$/, '') // Trim - from end of text
};


module.exports = router;
