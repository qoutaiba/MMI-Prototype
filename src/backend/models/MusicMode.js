const mongoose = require('mongoose');

const MusicModeSchema = new mongoose.Schema({
    selectedOption: [String],
});


module.exports = mongoose.model('MusicMode', MusicModeSchema);
