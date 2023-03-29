const mongoose = require("mongoose");
// blog schema
const blogSchema = new mongoose.Schema({
	title: String,
	content: String,
});

// blog model
const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;
