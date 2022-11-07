const express = require("express");

const app = express();

// Add a GET handler on the "/" route that always responds successfully with
// the message "Hello, World!"
app.get("/", (_, res) => {
	res.send("Hello, World!");
});

module.exports = app;
