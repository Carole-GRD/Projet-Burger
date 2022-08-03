const jwtUtils = require('../utils/jwt-utils');



const authentication = (/*options*/) => {

    return async (req, res, next) => {

        const authHeader = req.header['authorization'];

        // const token = authHeader ? authHeader.split(' ')[1] : false ;
        // ternaire avec syntaxe plus courte :
        const token = authHeader && authHeader.split(' ')[1];

        if (!token) {
            return res.sendStatus(401);    // Unauthorized
        }

        let decodedToken;
        try {
            decodedToken = await jwtUtils.decode(token);
        }
        catch (error) {
            return res.sendStatus(403);     // Forbidden
        }

        req.user = decodedToken;
        next();
    }

};

module.exports = authentication;