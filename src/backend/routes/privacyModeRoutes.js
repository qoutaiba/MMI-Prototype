const express = require('express');
const router = express.Router();
const PrivacyMode = require('../models/PrivacyMode');

router.post('/', async (req, res) => {
    try {
        const {privateMode} = req.body;
        const savedMode = await PrivacyMode.findOneAndUpdate(
            {},
            {privateMode},
            {
                new: true,
                upsert: true,
            }
        );
        res.send(savedMode);
    } catch (err) {
        console.error(err);
        res.status(500).send();
    }
});

router.get('/', async (req, res) => {
    try {
        const savedMode = await PrivacyMode.findOne();
        res.send(savedMode);
    } catch (err) {
        console.error(err);
        res.status(500).send();
    }
});

module.exports = router;

