// on importe le module express
const express = require('express');
// méthode Router() 
const userRouter = express.Router();

// on importe le "clientController" et ses fonctions
const userController = require('../controllers/user-controller');

// configuration des différentes routes
userRouter.route('/')
    .get(userController.getAll);

userRouter.route('/:id')
    .get(userController.getById)
    .put(userController.update)
    .delete(userController.delete);

// on exporte le router "enfant"
module.exports = userRouter;