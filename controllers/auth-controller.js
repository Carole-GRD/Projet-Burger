const User = require('../models/user-model');

const argon2 = require('argon2');


const authController = {

    login : async (req, res) => {

        const { email, password } = req.body;

        const credentialFilter = {email : email};

        const user = await User.findOne(credentialFilter);

        if (!user) {
            return res.status(401).json({error : 'Bad credential'});
        }

        const isPasswordValid = await argon2.verify(user.password, password);

        if (!isPasswordValid) {
            return res.status(401).json({error : 'Bad credential'});
        }

        return res.json({msg : 'Vous êtes bien connecté.e'});

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