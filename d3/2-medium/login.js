const express = require("express");
const { Op } = require("sequelize");
const { User } = require("./model/user");

const app = express();

app.use(express.json());

// Add a POST handler on the "/login" route that expects a `username_or_email`
// and a `password` parameter in a JSON body.
//
// - If either `username_or_email` or `password` is missing from the request,
//   send a Bad Request status in response.
//
// - If `username_or_email` matches an existing user and the `password` also
//   mactches, send a redirect to "/" in response.
//
// - Otherwise, send an Unauthorized status in reponse.

app.post("/login", async (req, res) => {
	let body = req.body;

	if (!body.username_or_email || !body.password) {
		return res.sendStatus(400);
	}

	if (
		!!(await User.findOne({
			where: {
				[Op.or]: [
					{
						username: body.username_or_email,
					},
					{
						email: body.username_or_email,
					},
				],
				password: body.password,
			},
		}))
	) {
		return res.redirect("/");
	}

	res.sendStatus(401);
});

module.exports = app;
