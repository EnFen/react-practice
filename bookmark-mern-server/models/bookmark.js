const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookmarkSchema = new Schema({
  title: String,
  url: String
});

module.exports = mongoose.model('Bookmark', BookmarkSchema);