const mongoose = require('mongoose');
const schema = mongoose.Schema;

// Schema define the structure of document and cast the property
// Define static model matters, compound indicers and document lifecycle
let blogSchema = new schema({
    title: String,
    author: String,
    body: String,
})

module.exports = blogSchema;