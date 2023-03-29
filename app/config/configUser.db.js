const mongoose = require("mongoose");

async function connectDB() {
	try {
		await mongoose.connect("mongodb://localhost:27017/blog");
		console.log("Database connected");
	} catch (err) {
		console.log(err.message);
	}
}

connectDB();
