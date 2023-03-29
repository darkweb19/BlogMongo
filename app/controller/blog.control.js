const Blog = require("../model/model.blog");

exports.index = async (req, res) => {
	const blogs = await Blog.find();
	res.render("blog/index", { blogs });
};

exports.create = async (req, res) => {
	res.render("blog/create");
};

exports.store = async (req, res) => {
	const blog = new Blog({
		title: req.body.title,
		content: req.body.content,
	});
	await blog.save();
	res.redirect("/blog");
};
exports.delete = async (req, res) => {
	const id = req.params.id;
	await Blog.findByIdAndDelete(id);
	res.redirect("/blog");
};
