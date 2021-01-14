const db = require("../models");
const Channel = db.channel;


checkDuplicatedName = (req, res, next) => {
    Channel.findOne({
        name: req.body.name
    }).exec((err, user) => {
        if (err) {
            res.status(500).send({message: err});
            return;
        }

        if (user) {
            res.status(400).send({message: "Failed! Channel name is already in use!"});
            return;
        }
        next();
    })
};
checkInvalidCharacter = (req, res, next) => {
    let cityreg=/^[^*?¤$%@!^¨µ£°=+}{'"~&/-]+$/;
    if (!req.body.name.match(cityreg)){
        console.log("ereur")
        res.status(403).send({message: "Illegal character found in the channel name"});
        return;
    }
    next()

}
const verifySignUp = {
    checkDuplicatedName,
    checkInvalidCharacter
};
module.exports = verifySignUp;
