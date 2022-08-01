const { Schema, model, Types } = require('mongoose');

// on importe les models auquels ont fait référence
const User = require('./user-model');
const Burger = require('./burger-model');

const orderSchema = new Schema({
    userEmail : {
        type : Types.ObjectId,
        ref : User,
        require : true
    },
    userAdress : {
        type : Types.ObjectId,
        ref : User,
        require : true
    },
    burgers : {
        type : Types.ObjectId,
        ref : Burger,
        require : true
    },
    statusOrder : {
        type : String,
        enum : ['Create', 'Pending', 'Done'],
        default : 'Create',
        require : true
    }
}, {
    collection : 'Order',
    timestamps : true
});


const Order = model('Order', orderSchema);
module.exports = Order;
