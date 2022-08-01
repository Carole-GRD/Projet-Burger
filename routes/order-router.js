const orderController = require('../controllers/order-controller');
const idValidation = require('../middlewares/idValidation');

// on importe le module express et on utilise la méthode Router()
const orderRouter = require('express').Router();

// configuration des routes
orderRouter.route('/')
    .get(orderController.getAll)
    .post(orderController.create);

orderRouter.route('/:id')
    .get(idValidation(), orderController.getByID)
    .put(idValidation(), orderController.update)
    .delete(idValidation(), orderController.delete);

orderRouter.route('/user/:id')
    .get(idValidation(), orderController.getByUser);

// orderRouter.route('/burger/:id')
//     .get(idValidation(), orderController.getByBurger);

// on exporte le router "enfant"
module.exports = orderRouter;