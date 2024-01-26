const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PrivacyModeSchema = new Schema({
    privateMode: Boolean,
});

const PrivacyMode = mongoose.model('PrivacyMode', PrivacyModeSchema);

module.exports = PrivacyMode;

