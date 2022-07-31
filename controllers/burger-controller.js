

const burgerController = {

    getAll : (req, res) => {
        console.log('Récupération de tous les burgers');
        res.sendStatus(501);
    },

    getById : (req, res) => {
        console.log(`Récupération du burger dont l'id est [${req.params.id}]`);
        res.sendStatus(501);
    },

    create : (req, res) => {
        console.log('Création d\'un nouveau burger');
        res.sendStatus(501);
    },

    update : (req, res) => {
        console.log(`Modification du burger dont l'id est [${req.params.id}]`);
        res.sendStatus(501);
    },

    delete : (req, res) => {
        console.log(`Suppression du burger dont l'id est [${req.params.id}]`);
        res.sendStatus(501);
    },

};

module.exports = burgerController;