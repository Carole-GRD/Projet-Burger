const burgerController = require('../controllers/burger-controller');

// on importe le module express et on utilise la méthode Router() 
const burgerRouter = require('express').Router();

// configuration des différentes routes
burgerRouter.route('/')
    .get(burgerController.getAll)
    .post(burgerController.create);

burgerRouter.route('/:id')
    .get(burgerController.getById)
    .put(burgerController.update)
    .delete(burgerController.delete);

// on exporte le router "enfant"
module.exports = burgerRouter;