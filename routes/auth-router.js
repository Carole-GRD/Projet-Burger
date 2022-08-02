const authController = require('../controllers/auth-controller');

// on importe le module express et on utilise la méthode Router()
const authRouter = require('express').Router();

// configuration des routes
authRouter.route('/login')
    .post(authController.login);

authRouter.route('/register')
    .post(authController.register);

// on exporte le router "enfant"
module.exports = authRouter;