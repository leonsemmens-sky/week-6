const express = require("express");
const path = require("path");

const app = express();

const assetsFolder = path.join(__dirname, "assets");

// Serve static resources from the `assets` folder.

app.use("/", express.static(assetsFolder));

// Add a GET handler that always responds successfully with the current time
// in a web page, using the following template:

/**
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Time</title>
    <link rel="stylesheet" href="/css/style.css" />
    <script src="/js/script.js" defer></script>
  </head>
  <body>
    <time datetime="DATETIME">HH:MM:SS</time>
  </body>
</html>
*/

// Where:
//
// DATATIME is a valid global date and time string
// HH is current hour
// MM is current minutes
// SS is current seconds
//
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/time

app.get("/time", (req, res) => {
	let date = new Date();

	res.send(
		`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <title>Time</title>
        <link rel="stylesheet" href="/css/style.css" />
        <script src="/js/script.js" defer></script>
      </head>
      <body>
      <time datetime="${date.toISOString()}">${date
			.getHours()
			.toString()
			.padStart(2, "0")}:${date
			.getMinutes()
			.toString()
			.padStart(2, "0")}:${date
			.getSeconds()
			.toString()
			.padStart(2, "0")}</time>
      </body>
    </html>`
	);
});

module.exports = app;
