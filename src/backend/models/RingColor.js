const mongoose = require('mongoose');

const RingColorShema = new mongoose.Schema({
    color: {
        type: String,
        required: true
    }
});
const RingColor = mongoose.model('Color', RingColorShema);

module.exports = RingColor;
