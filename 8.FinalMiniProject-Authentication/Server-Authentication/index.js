/* Main entry point of the server*/

// Libraries import 
const express = require('express');
const http = require('http');
const bodyParse = require('body-parser');
const morgan = require('morgan');
const app = express();
const router = require('./router');
const cors = require('cors');

// DB setup
// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:auth/auth');

// App setup 
app.use(morgan('combined'));
app.use(cors());
app.use(bodyParse.json({ type: '*/*' }));
router(app);

// Server setup
const port = process.env.PORT || 3000;
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on:', port);