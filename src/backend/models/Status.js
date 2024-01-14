const mongoose = require('mongoose');

const StatusSchema = new mongoose.Schema({
    emoji: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
    }
});

const Status = mongoose.model('statuses', StatusSchema);
Status.createIndexes();

module.exports = Status;
