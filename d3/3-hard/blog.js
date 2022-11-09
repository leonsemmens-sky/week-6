const express = require("express");
const { Category, Post } = require("./models");

express.Router();

const app = express();

// Add a GET handler on the "/blog" route that returns a collection of posts.

app.get("/blog", async (req, res) => {
	res.send(await Post.findAll());
});

// Add a GET handler on the "/blog/:slug" route that returns a single post with
// a matching `slug`.

app.get("/blog/:slug", async (req, res) => {
	let post = await Post.findOne({
		where: {
			slug: req.params.slug,
		},
	});
	if (!post) {
		return res.sendStatus(404);
	}
	res.send(post);
});

// Add a GET handler on the "/categories" route that returns a collection of
// categories.

app.get("/categories", async (req, res) => {
	res.send(await Category.findAll());
});

// Add a GET handler on the "/categories/:slug" route that returns a single
// category with a matching `slug`.

app.get("/categories/:slug", async (req, res) => {
	let category = await Category.findOne({
		where: {
			slug: req.params.slug,
		},
	});
	if (!category) {
		return res.sendStatus(404);
	}
	res.send(category);
});

// Add a GET handler on the "/categories/:slug/posts" route that returns a
// a collection of posts that are in the matching category.

app.get("/categories/:slug/posts", async (req, res) => {
	let category = await Category.findOne({
		where: {
			slug: req.params.slug,
		},
		include: Post,
	});
	if (!category) {
		return res.sendStatus(404);
	}
	res.send(category.Posts);
});

// Return JSON responses and appropriate statuses.

module.exports = app;
