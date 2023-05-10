const mongoose = require('mongoose');

const gigsSchema = mongoose.Schema({
    companies: String,
    primaryText: String,
    headline: String,
    description: String,
    img: String,
    url: String
}, {
    versionKey: false
})

const GigsModel = mongoose.model('addGigs', gigsSchema)

module.exports = GigsModel