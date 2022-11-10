const express = require("express");

const app = express();

// Add a POST handler on the "/" route that always responds successfully
// for valid JSON body parameters:
//
// - Expect `username` and `email` parameters.
//
// - A `username` must be at least 3 characters long but cannot exceed 10
//   characters. It must only conatin upper or lowercase letters.
//
// - If the `username` is not valid, respond with a Bad Request.
//
// - An `email` must contain an '@' proceeded by a `local part` (e.g., john)
//   and followed by the `domain part` which must be 'example.com'. The local
//   part must be at least 1 character long and can only contain upper and
//   lowercase letters.
//
// - If the `email` address is not valid, respond with a Bad Request.
//
// - If the `local part` of the `email` is the same as the `username`,
//   regardless of letter case, respond with a Bad Request; we don't want
//   username and/or emails to be easily guessed.
//
// - If the `domain part` of the `email` is not 'example.com', respond with
//   a Bad Request; we want to limit who can get sign up.
//
// - If both parameters are valid, respond with Created.

module.exports = app;
