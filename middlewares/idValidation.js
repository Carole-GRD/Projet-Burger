const mongoose = require('mongoose');

const idValidation = () => {
    return (req, res, next) => {
        const id = req.params.id;
        if (!mongoose.isValidObjectId(id)) {
            return res.sendStatus(404);
        };        
        next();
    }
};

module.exports = idValidation;