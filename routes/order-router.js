// on importe le module express et on utilise la méthode Router()
const orderRouter = require('express').Router();

// configuration des routes
orderRouter.route('/')
    .get((req, res) => {res.sendStatus(501)})
    .post((req, res) => {res.sendStatus(501)});

orderRouter.route('/:id')
    .get((req, res) => {res.sendStatus(501)})
    .put((req, res) => {res.sendStatus(501)})
    .delete((req, res) => {res.sendStatus(501)});

orderRouter.route('/user/:id')
    .get((req, res) => {res.sendStatus(501)});

// on exporte le router "enfant"
module.exports = orderRouter;