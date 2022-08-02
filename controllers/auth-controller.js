const User = require('../models/user-model');

const argon2 = require('argon2');


const authController = {

    login : async (req, res) => {

    },

    register : async (req, res) => {

        const { firstname, lastname, email, password, adress } = req.body;

        const hashedPassword = await argon2.hash(password);

        const userToInsert = User({
            firstname,
            lastname,
            email,
            password : hashedPassword,
            adress
        });

        await userToInsert.save();
        res.status(200).json(userToInsert);

    }

};


module.exports = authController;