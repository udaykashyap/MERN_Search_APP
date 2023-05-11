const mongoose = require("mongoose");
require('dotenv').config()

const Connections = mongoose.connect(process.env.API);

module.exports = Connections