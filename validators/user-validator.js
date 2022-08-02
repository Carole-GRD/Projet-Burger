const yup = require('yup');

const userValidator = yup.object({
    firstname : yup.string().trim().required().max(150),
    lastname : yup.string().trim().required().max(150),
    email : yup.string().trim().email().required().max(255),
    adress : yup.string().trim()
});

module.exports = userValidator;