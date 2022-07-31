// on importe le module express
const express = require('express');
// méthode Router() 
const userRouter = express.Router();

// on importe le "userController" et ses fonctions
const userController = require('../controllers/user-controller');

// on importe les middlewares
const idValidation = require('../middlewares/idValidation');

// configuration des différentes routes
userRouter.route('/')
    // ------------------------------------------------------------------------
    // "post" est une route temporaire pour créer quelques "users" en attendant de faire le "register"
    // TODO: à commenter ou à supprimer par la suite
    .post(userController.create)     
    // ------------------------------------------------------------------------
    .get(userController.getAll);

userRouter.route('/:id')
    .get(idValidation() , userController.getById)
    .put(idValidation() , userController.update)
    .delete(idValidation() , userController.delete);

// on exporte le router "enfant"
module.exports = userRouter;