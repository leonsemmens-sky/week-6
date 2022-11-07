const express = require('express');
const path = require('path');

const app = express();

const publicFolder = path.join(__dirname, 'public');

// Serve static web pages from the `public` folder, and resources from the
// `assets` folder.

module.exports = app;
