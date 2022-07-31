// on importe le module express
const express = require('express');
// méthode Router() 
const userRouter = express.Router();

// on importe le "clientController" et ses fonctions
const userController = require('../controllers/user-controller');

// configuration des différentes routes
userRouter.route('/')
    // ------------------------------------------------------------------------
    // "post" est une route temporaire pour créer quelques "users" en attendant de faire le "register"
    // TODO: à commenter ou à supprimer par la suite
    .post(userController.create)     
    // ------------------------------------------------------------------------
    .get(userController.getAll);

userRouter.route('/:id')
    .get(userController.getById)
    .put(userController.update)
    .delete(userController.delete);

// on exporte le router "enfant"
module.exports = userRouter;