const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", "app/views");
app.use(express.static("public"));

// db connection
require("./app/config/config.db");

const Blog = require("./app/model/model.blog");

// home route
app.get("/", async (req, res) => {
	const blogs = await Blog.find();
	res.render("home", { blogs });
});

// blog routes
app.use(require("./app/routes/route.blog"));

app.listen(3000, () => {
	console.log("Server is running on port 3000");
});
