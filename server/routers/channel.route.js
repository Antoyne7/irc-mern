const express = require('express');
const middlewares = require('../middlewares')
const router = express.Router();
const Channel = require('../models/channel.model');
const User = require('../models/user.model');

//Route
router.post("/channel/add", [
        middlewares.channel.checkDuplicatedName,
        middlewares.auth.verifyToken
    ],
    async (req, res) => {
        try {
            const channel = new Channel(req.body);
            if (req.body.password !== req.body.passwordRepeat) {
                res.status(400).send(req.body + 'error: ' + req.body.password + ' ; ' + req.body.passwordRepeat)
            }
            await User.findOne({
                username: req.body.username
            }, (err, creator) => {
                if (err) {
                    console.log(err)
                    return;
                }
                channel.creator = creator._id;
            });

            await channel.save(err => {
                if (err) {
                    console.log(err)
                    return;
                }
                res.send({message: "Channel was saved successfully!", channel: channel.name});
            })
        } catch (e) {
            res.status(400).send(req.body + e)
        }
    });

router.post("api/channel/message", [middlewares.auth.verifyToken], (req, res) => {
    res.json(
        {}
    )
});
module.exports = router;
