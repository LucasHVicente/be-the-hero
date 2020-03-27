//Imports

const express = require('express');
const routes = express.Router();
//Imports de controllers

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

//rotas OngController

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

//rotas IncidentController

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete)

//rotas ProfileController

routes.get('/profile', ProfileController.index);

//rotas SessionController

routes.post('/sessions', SessionController.create)


module.exports = routes;
 