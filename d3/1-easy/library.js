const express = require("express");
const { Book } = require("./models/book");

const app = express();

// Add a GET handler on the "/books" route that responds with the collection of
// books in an `application/json` response body.

app.get("/books", async (req, res) => {
	res.send(await Book.findAll());
});

// Add a GET handler on the "/books/:isbn" route that responds with a single
// book in an `application/json` response body. If the book is not found,
// respond with the Not Found status.

app.get("/books/:isbn", async (req, res) => {
	let book = await Book.findOne({
		where: {
			isbn: req.params.isbn,
		},
	});

	if (!book) {
		return res.sendStatus(404);
	}
	res.send(book);
});

module.exports = app;
