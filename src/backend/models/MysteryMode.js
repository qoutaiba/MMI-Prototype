const mongoose = require('mongoose');
const { Schema } = mongoose;

const mysteryMode = new Schema({
    name: String
});

const MysteryMode = mongoose.model('MysteryMode', mysteryMode);

module.exports = MysteryMode;
