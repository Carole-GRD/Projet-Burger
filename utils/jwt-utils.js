const jwt = require('jsonwebtoken');

const { JWT_AUDIENCE, JWT_ISSUER, JWT_SECRET } = process.env;

const jwtUtils = {

    generate : ({id, role}) => {

        return new Promise((resolve, reject) => {

            const payload = { id, role };

            const options = {
                algorithm : 'HS512',
                expiresIn : '12h',
                audience : JWT_AUDIENCE,
                issuer : JWT_ISSUER
            };

            jwt.sign(payload, JWT_SECRET, options, (error, token) => {
                if (error) {
                    return reject(error);
                }
                resolve({token});
            });

        });

    },

    decode : () => {

    }

}

module.exports = jwtUtils;