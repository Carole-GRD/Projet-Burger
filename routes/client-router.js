// on importe le module express
const express = require('express');
// méthode Router() 
const clientRouter = express.Router();

// on importe le "clientController" et ses fonctions
const clientController = require('../controllers/client-controller');

// configuration des différentes routes
clientRouter.route('/')
    .get(clientController.getAll);

clientRouter.route('/:id')
    .get(clientController.getById)
    .put(clientController.update)
    .delete(clientController.delete);

// on exporte le router "enfant"
module.exports = clientRouter;