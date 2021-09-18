const PirateController = require('../controllers/Pirate.controllers');

module.exports = function(app) {
    // Creates & stores a pirate in the DB
    app.post('/api/pirates', PirateController.createPirate);
    // Retrieves all the pirates from the DB
    app.get('/api/pirates', PirateController.getAllPirates);
    // Retrieves one pirate (using their ID) from the DB
    app.get('/api/pirates/:id', PirateController.getOnePirate);
    // Updates a pirate (using their ID)
    app.put('/api/pirates/:id', PirateController.updatePirate);
    // Deletes a pirate (using their ID)
    app.delete('/api/pirates/:id', PirateController.deletePirate);
}