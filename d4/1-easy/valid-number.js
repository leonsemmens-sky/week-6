const express = require("express");

const app = express();

// Add a GET handler on the "/:number" route that always responds successfully
// for valid JavaScript numbers.

app.get("/:number", (req, res) => {
	let num = Number(req.params.number);
	if (isNaN(num)) {
		return res.sendStatus(404);
	}
	res.sendStatus(200);
});

module.exports = app;
