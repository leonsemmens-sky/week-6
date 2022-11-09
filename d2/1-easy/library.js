const express = require("express");
const books = require("./models/books");

const app = express();

// Add a GET handler on the "/books" route that responds with the collection of
// books in an `application/json` response body.

app.get("/books", (req, res) => {
	// res.setHeader("content-type", "application/json");
	res.send(books);
});

// Add a GET handler on the "/books/:isbn" route that responds with a single
// book in an `application/json` response body. If the book is not found,
// respond with the Not Found status.

app.get("/books/:isbn", (req, res) => {
	let book = books.find((b) => b.isbn === req.params.isbn);
	if (!book) {
		return res.sendStatus(404);
	}

	// res.setHeader("content-type", "application/json");
	res.send(book);
});

module.exports = app;
