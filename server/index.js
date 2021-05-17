const express = require('express');
const colors = require('colors')
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose')

const app = express();
const router = require('./routers/router')

//DB Setup
mongoose.connect('mongodb://localhost/auth', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// Add Setup
app.use(morgan('combined'))
app.use(bodyParser.json({ type: '*/*'}))
router(app)

// Server Setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);

server.listen(port);
console.log(`Server running on ${port}`.cyan)
