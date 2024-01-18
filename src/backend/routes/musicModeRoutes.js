const express = require('express');
const router = express.Router();
const MusicMode = require('../models/MusicMode');

// Save the selected option from the dropdown menu
router.post('/', async (req, res) => {
    try {
        const { selectedOption } = req.body;
        const savedOption = await MusicMode.findOneAndUpdate(
            {},
            { selectedOption },
            {
                new: true,
                upsert: true,
            }
        );
        res.send(savedOption);
    } catch (err) {
        console.error(err);
        res.status(500).send();
    }
});

// Get the saved option from the drop down menu
router.get('/', async (req, res) => {
    try {
        const savedOption = await MusicMode.findOne();
        res.send(savedOption);
    } catch (err) {
        console.error(err);
        res.status(500).send();
    }
  });
  
module.exports = router;
