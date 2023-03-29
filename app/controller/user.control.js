const User = require("../model/model.user");

exports.index = async (req, res) => {
	const users = await User.find();
	res.render("user/index", { users });
};

exports.create = async (req, res) => {
	res.render("user/create");
};

exports.store = async (req, res) => {
	const user = new User({
		name: req.body.name,
		email: req.body.email,
	});
	await user.save();
	res.redirect("/user");
};

exports.delete = async (req, res) => {
	const id = req.params.id;
	await User.findByIdAndDelete(id);
	res.redirect("/user");
};
