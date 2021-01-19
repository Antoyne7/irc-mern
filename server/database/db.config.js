const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    CONNECT_STRING: process.env.mongo_uri
};
