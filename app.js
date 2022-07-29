// module qui permet de gérer (d'aller rechercher) les variables d'environnement
require('dotenv-flow').config();

// Création du serveur Express
const express = require('express');
const app = express();


// variables d'environnement
const { NODE_ENV, MESSAGE, PORT } = process.env;
console.log('Lancé en', NODE_ENV, ':', MESSAGE);

// route temporaire
// app.use('/api', (req, res) => {
//     const data = {
//         msg : 'Projet Burger'
//     };
//     res.json(data);
// });


// on importe notre module router
const router = require('./routes');

// on indique à notre serveur qu'une fois arrivé sur la route /api, il doit utiliser notre router
app.use('/api', router);

// on met le serveur sur écoute
app.listen(PORT, () => {
    console.log(`Server up on port : ${PORT} [${NODE_ENV}]`);
});