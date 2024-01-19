const express = require('express');
const router = express.Router();
const CurrentPage = require('../models/CurrentPage');

router.post('/', async (req, res) => {
    try {
        await CurrentPage.findOneAndUpdate(
            {},
            { $set: { page: req.body.page } },
            { upsert: true }
        );
        res.status(200).json({ message: 'Page saved successfully.' });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while saving the page.' });
    }
});

router.get('/', async (req, res) => {
    try {
        const currentPage = await CurrentPage.findOne({});
        if (!currentPage) {
            return res.status(404).json({ message: 'No current page found.' });
        }
        res.status(200).json({ page: currentPage.page });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching the current page.' });
    }
});


module.exports = router;
