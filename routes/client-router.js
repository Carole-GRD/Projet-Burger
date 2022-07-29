// on importe le module express
const express = require('express');
// méthode Router() 
const clientRouter = express.Router();

// configuration des différentes routes
clientRouter.route('/')
    .get((req, res) => {res.sendStatus(501)});

clientRouter.route('/:id')
    .get((req, res) => {res.sendStatus(501)})
    .put((req, res) => {res.sendStatus(501)})
    .delete((req, res) => {res.sendStatus(501)});

// on exporte le router "enfant"
module.exports = clientRouter;