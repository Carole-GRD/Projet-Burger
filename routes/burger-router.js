// on importe le module express et on utilise la méthode Router() 
const burgerRouter = require('express').Router();

// configuration des différentes routes
burgerRouter.route('/')
    .get((req, res) => {res.sendStatus(501)})
    .post((req, res) => {res.sendStatus(501)});

burgerRouter.route('/:id')
    .get((req, res) => {res.sendStatus(501)})
    .put((req, res) => {res.sendStatus(501)})
    .delete((req, res) => {res.sendStatus(501)});

// on exporte le router "enfant"
module.exports = burgerRouter;