const orderController = require('../controllers/order-controller');
// on importe les middlewares et les "validators"
const authentication = require('../middlewares/authJwtValidation');
const idValidation = require('../middlewares/idValidation');
const bodyValidation = require('../middlewares/bodyValidation');
const { createOrderValidator, updateOrderValidator } = require('../validators/order-validator');

// on importe le module express et on utilise la méthode Router()
const orderRouter = require('express').Router();

// configuration des routes
orderRouter.route('/')
    .get(orderController.getAll)
    .post(bodyValidation(createOrderValidator), orderController.create);
    // .get(authentication(['Admin', 'Moderator']), orderController.getAll)
    // .post(authentication(), bodyValidation(createOrderValidator), orderController.create);

orderRouter.route('/:id')
    .get(idValidation(), orderController.getByID)
    .put(idValidation(), bodyValidation(updateOrderValidator) , orderController.update)
    .delete(idValidation(), orderController.delete);
    // .get(authentication(), idValidation(), orderController.getByID)
    // .put(authentication(['Admin', 'Moderator']), idValidation(), bodyValidation(updateOrderValidator) , orderController.update)
    // .delete(authentication(['Admin', 'Moderator']), idValidation(), orderController.delete);

orderRouter.route('/user/:id')
    .get(idValidation(), orderController.getByUser);
    // .get(authentication(), idValidation(), orderController.getByUser);

// orderRouter.route('/burger/:id')
//     .get(idValidation(), orderController.getByBurger);

// on exporte le router "enfant"
module.exports = orderRouter;