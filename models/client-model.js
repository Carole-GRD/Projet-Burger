const { Schema, model } = require('mongoose');


const clientSchema = new Schema({
    firstname : {
        type : String,
        require : true,
        trim : true
    },
    lastname : {
        type : String,
        require : true,
        trim : true
    },
    email : {
        type : String,
        unique : true,
        require : true,
        trim : true
    },
    password : {
        type : String,
        require : true
    },
    adress : {
        type : String
    }
}, {
    collection : 'Client',
    timestamps : true
});


const Client = model('Client', clientSchema);
module.exports = Client;