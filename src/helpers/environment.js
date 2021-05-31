const dotenv = require("dotenv").config();

const DBURL = process.env.DBURL;
const PORT = process.env.PORT || 8000;

module.exports = { DBURL, PORT };
