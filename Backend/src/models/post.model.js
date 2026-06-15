const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    file: String,
    caption: String,
})

module.exports = mongoose.model("post", postSchema);