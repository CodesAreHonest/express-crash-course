"use strict";

import 'babel-polyfill';

import express from 'express';
import bodyParser from 'body-parser';
import blog from './src/routes/CrmRoute';
import connect from './db/connect';
import config from './core/config';

const port = config.serverPort;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
app.use('/', blog);

app.listen(port, () => {
    console.log (`Server is running on port ${port}`)
})