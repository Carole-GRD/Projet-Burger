const yup = require('yup');

const burgerValidator = yup.object({
    burgerName : yup.string().trim().required().max(30),
    ingredients : yup.object({ 
        viande : yup.string().required(), 
        pain : yup.string().required(), 
        garniture : yup.array().required(), 
        sauce : yup.string().required() 
    }),
    allergen : yup.array().of(yup.string().required()),
    price : yup.number().required().positive(),
    availability : yup.string().trim().required()
});

module.exports = burgerValidator;
