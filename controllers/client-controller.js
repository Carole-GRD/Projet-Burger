// fonctions appelées pour chaque routes
const clientController = {
    getAll : (req, res) => {
        console.log('Récupération de toutes les clients');
        res.sendStatus(501);
    },
    getById : (req, res) => {
        console.log(`Récupération du client dont l\'id est [${req.params.id}]`);
        res.sendStatus(501);
    },
    update : (req, res) => {
        console.log(`Modification du client dont l\'id est [${req.params.id}]`);
        res.sendStatus(501);
    },
    delete : (req, res) => {
        console.log(`Suppression du client dont l\'id est [${req.params.id}]`);
        res.sendStatus(501);
    }
};


// on exporte le controller
module.exports = clientController;