const authRoutes = require("./auth.routes");
const testRoutes = require("./test.routes");
const channelRoutes = require("./channel.route")

const express = require("express");
const router = express.Router();

module.exports = function(app) {
    // Header
    router.use(function(req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    // Les routes
    router.use(authRoutes);
    router.use(testRoutes);
    router.use(channelRoutes);

    // Base path
    app.use('/api', router)
};
