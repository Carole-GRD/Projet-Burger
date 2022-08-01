const burgerController = require('../controllers/burger-controller');
const idValidation = require('../middlewares/idValidation');

// on importe le module express et on utilise la méthode Router() 
const burgerRouter = require('express').Router();

// configuration des différentes routes
burgerRouter.route('/')
    .get(burgerController.getAll)
    .post(burgerController.create);

burgerRouter.route('/:id')
    .get(idValidation(), burgerController.getById)
    .put(idValidation(), burgerController.update)
    .delete(idValidation(), burgerController.delete);

// on exporte le router "enfant"
module.exports = burgerRouter;