const express = require("express");
const { Contact } = require("./models/contact");

const app = express();

app.use(express.json());

// Add a GET handler on the "/contacts" route that returns the collection of
// contacts.

app.get("/contacts", async (_req, res) => {
	res.send((await Contact.findAll()).map((contact) => contact.toJSON()));
});

// Add a POST handler on the "/contacts" route that expects a `firstName` and
// `lastName` parameter, and an optional `emailAddress` parameter:
//
// - if the `firstName` and `lastName` (and optional `emailAddress`) parameters
//   are provided, create a new contact and respond with a Created status code.
//
// - if either the `firstName` or `lastName` are missing, respond with a Bad
//   Request status code.

app.post("/contacts", async (req, res) => {
	let body = req.body;

	if (!body.firstName || !body.lastName) {
		return res.sendStatus(400);
	}

	await Contact.create(body);
	res.sendStatus(201);
});

// Add a GET handler on the "/contacts/:id" route:
//
// - if the `id` is valid (i.e., there is a contact with a matching primary
//   key), respond with the associated contact.
//
// - if the `id` is invalid, respond with a Not Found status code.

app.get("/contacts/:id", async (req, res) => {
	let contact = await Contact.findByPk(req.params.id);

	if (!contact) {
		return res.sendStatus(404);
	}

	res.send(contact);
});

// Add a DELETE handler on the "/contacts/:id" route which deletes the
// associated contact (if it exists). Respond with an OK status code.

app.delete("/contacts/:id", async (req, res) => {
	await Contact.destroy({
		where: {
			id: req.params.id,
		},
	});
	res.sendStatus(200);
});

// Add a PUT handler on the "/contacts/:id" route that expects a `firstName`
// and `lastName` parameter, and an optional `emailAddress` parameter:
//
// - if the `id` is invalid, respond with a Not Found status code.
//
// - if the `firstName` and `lastName` (and optional `emailAddress`) parameters
//   are provided, update the associated contact and respond with an OK status
//   code.
//
// - if either the `firstName` or `lastName` are missing, respond with a Bad
//   Request status code.

app.put("/contacts/:id", async (req, res) => {
	let body = req.body;

	if (!body.firstName || !body.lastName) {
		return res.sendStatus(400);
	}

	let contact = await Contact.findByPk(req.params.id);
	if (!contact) {
		return res.sendStatus(404);
	}

	await contact.update(body);
	res.sendStatus(200);
});

// Add a PATCH handler on the "/contacts/:id" route that optionally expects a
// `firstName`, `lastName`, and `emailAddress` parameter:
//
// - if the `id` is invalid, respond with a Not Found status code.
//
// - if any of the parameters are provided, update the associated contact and
//   respond with an OK status code.
//

app.patch("/contacts/:id", async (req, res) => {
	let contact = await Contact.findByPk(req.params.id);
	if (!contact) {
		return res.sendStatus(404);
	}

	await contact.update(req.body);
	res.sendStatus(200);
});

module.exports = app;
