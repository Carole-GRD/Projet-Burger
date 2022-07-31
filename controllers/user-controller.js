const User = require("../models/user-model");

// fonctions appelées pour chaque routes
const userController = {
    // ----------------------------------------------------------------------------
    // TODO: à commenter ou à supprimer par la suite
    // j'ajoute temporairement la fonction "create" qui permet de créer quelques "users" pour tester dans insomnia, en attendant de faire le "register" 
    create : async (req, res) => {
        const userToAdd = User(req.body);
        // console.log(req.body);
        // console.log(userToAdd);
        await userToAdd.save();
        res.status(200).json(userToAdd);
    },
    // ----------------------------------------------------------------------------
    getAll : async (req, res) => {
        const users = await User.find().select({ firstname : 1, lastname : 1, eamil : 1, adress : 1});
        res.status(200).json(users);
    },
    getById : async (req, res) => {
        const id = req.params.id;
        const user = await User.findById(id);
        if (!user) {
            res.sendStatus(404);
        }
        res.status(200).json(user);
    },
    update : (req, res) => {
        console.log(`Modification du user dont l\'id est [${req.params.id}]`);
        res.sendStatus(501);
    },
    delete : (req, res) => {
        console.log(`Suppression du user dont l\'id est [${req.params.id}]`);
        res.sendStatus(501);
    }
};

// on exporte le controller
module.exports = userController;
