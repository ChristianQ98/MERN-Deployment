const mongoose = require('mongoose');
const PirateSchema = new mongoose.Schema({
    name: { 
        type: String,
        required: [ true, "Pirate name is required!"]
    },
    imageUrl: { 
        type: String, 
        required: [ true, "Image URL is required!"]
    },
    numOfTreasureChests: { 
        type: Number, 
        required: [ true, "Number of Treasure Chests is required!"]
    },
    catchPhrase: {
        type: String,
        required: [ true, "Catch Phrase is required!"]
    },
    crewPosition: {
        type: String,
    required: [ true, "Crew Position is required!"]
    },
    pegLeg: {
        type: Boolean,
        required: [ true, "Peg Leg field is required!"],
        default: true
    },
    eyePatch: {
        type: Boolean,
        required: [ true, "Eye Patch field is required!"],
        default: true
    },
    hookHand: {
        type: Boolean,
        required: [ true, "Hook hand field is required!"],
        default: true
    }
}, { timestamps: true });

module.exports.Pirate = mongoose.model('Pirate', PirateSchema);