const express = require("express");

const app = express();

// Form data is URL encoded
app.use(express.urlencoded({ extended: false }));

// Add a POST handler on the "/login" route that expects a body with both a
// `username` and `password` field.
//
// - If either the `username` or `password` is missing from the request body,
//   send a Bad Request status in response.
//
// - If `username` is `alice` and password is `s3cr3t`, send a redirect to "/"
//   in response.
//
// - Otherwise, send an Unauthorized status in reponse.

app.post("/login", (req, res) => {
	let body = req.body;
	if (!body.username || !body.password) {
		return res.sendStatus(400);
	}

	if (body.username == "alice" && body.password == "s3cr3t") {
		return res.redirect("/");
	}

	res.sendStatus(401);
});

module.exports = app;
