const { Schema, model } = require('mongoose');

const burgerSchema = new Schema({
    name : {
        type : String,
        require : true,
        unique : true,
        trim : true
    },
    ingredients : [
        { viande : String },
        { garniture : String },
        { sauce : String }
    ],
    allergen : {
        type : Boolean,
        require : true
    },
    price : {
        type : Number,
        require : true
    },
    availability : {
        type : Boolean,
        require : true
    }
}, {
    collection : 'Burger',
    timestamps : true
});

const Burger = model('Burger', burgerSchema);
module.exports = Burger;