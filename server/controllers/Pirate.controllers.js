const { Pirate } = require('../models/Pirate.models');

// Retrieves all pirates from the DB
module.exports.getAllPirates = (req, res) => {
    Pirate.find().collation({ locale: 'en' }).sort({ name: 1 })
        .then(allPirates => res.json(allPirates))
        .catch(err => res.status(404).json(err));
};

// Retrieves one pirate from the DB (using their ID)
module.exports.getOnePirate = (req, res) => {
    Pirate.findById(req.params.id)
        .then(pirate => res.json(pirate))
        .catch(err => res.status(404).json(err));
};

// Creates & stores a pirate in the DB
module.exports.createPirate = (req, res) => {
    const { name, imageUrl, numOfTreasureChests, catchPhrase, crewPosition, pegLeg, eyePatch, hookHand } = req.body
    Pirate.create({
        name, 
        imageUrl,
        numOfTreasureChests,
        catchPhrase,
        crewPosition,
        pegLeg,
        eyePatch,
        hookHand
    })
        .then(newPirate => res.json(newPirate))
        .catch(err => res.status(404).json(err));
};

// Updates a pirate
module.exports.updatePirate = (req, res) => {
    Pirate.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
        .then(updatedPirate => res.json(updatedPirate))
        .catch(err => res.status(404).json(err));
};

// Deletes a pirate
module.exports.deletePirate = (req, res) => {
    Pirate.findByIdAndDelete(req.params.id)
        .then(deletedPirate => res.json(deletedPirate))
        .catch(err => res.status(404).json(err));
};