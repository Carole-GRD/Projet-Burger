// on importe les router "enfants"
const clientRouter = require('./client-router');
const burgerRouter = require('./burger-router');
const orderRouter = require('./order-router');

// on importe le module express et on utilise la méthode Router()
const router = require('express').Router();

// configuration des différentes routes
router.use('/client', clientRouter);
router.use('/burger', burgerRouter);
router.use('/commande', orderRouter);

// on exporte le router "parent"
module.exports = router;
