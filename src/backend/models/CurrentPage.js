const mongoose = require('mongoose');

const CurrentPageSchema = new mongoose.Schema({
   page: {
       type: String,
       required: true
   }
});

module.exports = mongoose.model('CurrentPage', CurrentPageSchema);
