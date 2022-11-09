const express = require("express");

const app = express();

// Add a GET handler that always responds successfully with the route in
// uppercase, i.e., GET /hello should respond with the text body: HELLO!
// app.get("/*", (req, res) => {
// 	let path = req.path.substring(1);
// 	if (!path) {
// 		return res.sendStatus(404);
// 	}

// 	let shout = path.toUpperCase() + "!";
// 	res.send(shout);
// });

app.get("/:hello", (req, res) => {
	res.send(req.params.hello.toUpperCase() + "!");
});

app.listen(3000);

module.exports = app;
