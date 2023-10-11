const cors = require('cors');
require('express-async-errors');
const express = require('express');

const routes = require('./routes/index');
const errorMiddleware = require('./middleware/errorMiddleware');

const app = express();
app.use(express.json());
app.use(cors());

app.use(express.static('public'));

app.use('/', routes.customer);

app.use(errorMiddleware);

module.exports = app;