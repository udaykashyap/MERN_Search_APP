const mongoose = require("mongoose");

const Connections = mongoose.connect(`mongodb+srv://udaykashyaphjp:9334MaaPaa@cluster0.4dfltqz.mongodb.net/gigs?retryWrites=true&w=majority`);

module.exports = Connections