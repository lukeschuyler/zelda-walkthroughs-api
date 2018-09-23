// require('dotenv').config();
const express = require('express');
const path = require('path');
const { json, urlencoded } = require('body-parser');
const routes = require('./app/routes/');
const cors = require('cors')

const app = express();


app.use(cors())
app.use(json())
app.use(urlencoded({ extended: false }));

app.use('/api/v1/', routes);