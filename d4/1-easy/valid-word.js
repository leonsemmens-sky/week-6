const express = require("express");

const app = express();

// Add a GET handler on the "/:word" route that always responds successfully
// for valid words:
//
// - A valid word is a string of characters that only contain the letters 'a' to 'z'.

app.get("/:word", (req, res) => {
	if (!/^[a-z]+$/g.test(req.params.word)) {
		return res.sendStatus(404);
	}
	res.sendStatus(200);
});

module.exports = app;
