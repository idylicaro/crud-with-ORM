const express = require('express');
const UserController = require('./controllers/UserController');
const routes = express.Router();

routes.post('/insert', UserController.createAmdUpdate);
routes.post('/home', UserController.dataSearch);

module.exports = routes;
