const express = require('express');
const middlewares = require('../middlewares')
const router = express.Router();
const Channel = require('../models/channel.model');
const User = require('../models/user.model');

//Route
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
                res.send({message: "Channel was saved successfully!", channel: channel.name, slug: channel.slug});
            })
        } catch (e) {
            res.status(400).send(e)
        }
    });


router.get("/channel/get", [
        middlewares.auth.verifyToken
    ],
    async (req, res) => {
        try {
            console.log(req.query.channel);
            await Channel.findOne({
                slug: req.query.channel
            }, (err, resp) => {
                console.log(resp);
                if (err) {
                    console.log(err);
                    return
                }
                res.send({channel: resp})
            })
        } catch (e) {
            res.status(400).send(e)
        }
    }
)

router.get("/channel/search", [
        // middlewares.auth.verifyToken
    ],
    async (req, res) => {
        if (req.query.search.length >= 3) {
            new Promise((resolve, reject) => {
                Channel.find(
                    {name: {$regex: req.query.search}},
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

router.post("/channel/message", [middlewares.auth.verifyToken], (req, res) => {
    res.json(
        {}
    )
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
