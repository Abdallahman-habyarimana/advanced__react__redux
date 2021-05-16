const express = require('express');
const colors = require('colors')
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan')

const app = express()

// Add Setup

// Server Setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);

server.listen(port);
console.log(`Server running on ${port}`.cyan)
