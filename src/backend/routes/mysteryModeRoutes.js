const express = require('express');
const router = express.Router();
const MysteryMode = require('../models/MysteryMode');

router.post('/', async (req, res) => {
    const { name } = req.body;
    let mysteryMode = await MysteryMode.findOne();
    if (!mysteryMode) {
        mysteryMode = new MysteryMode({ name });
    } else {
        mysteryMode.name = name;
    }
    const result = await mysteryMode.save();
    res.send(result);
});

router.get('/', async (req, res) => {
    try {
        const savedOption = await MysteryMode.findOne();
        res.send(savedOption);
    } catch (err) {
        console.error(err);
        res.status(500).send();
    }
});

module.exports = router;
