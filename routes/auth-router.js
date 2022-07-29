// on importe le module express et on utilise la méthode Router()
const authRouter = require('express').Router();

// configuration des routes
authRouter.route('/login')
    .post((req, res) => {res.sendStatus(501)});

authRouter.route('/register')
    .post((req, res) => {res.sendStatus(501)});

// on exporte le router "enfant"
module.exports = authRouter;