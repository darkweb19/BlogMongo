const mongoose = require("mongoose");
// blog schema
const userSchema = new mongoose.Schema({
	name: String,
	email: String,
});

// blog model
const User = mongoose.model("User", userSchema);

module.exports = User;
