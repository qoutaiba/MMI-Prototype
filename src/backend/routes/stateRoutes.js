const express = require('express');
const router = express.Router();
const Status = require('../models/Status');

// Create a new status
router.post('/', async (req, res) => {
    try {
        let filter = {}; 
        let update = req.body;
        let options = { upsert: true, new: true };
        
        const status = await Status.findOneAndUpdate(filter, update, options);
        res.status(201).json(status);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
 });
 

// GET all statuses
router.get('/', async (req, res) => {
    try {
        const statuses = await Status.find();
        res.json(statuses);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
 });
 
module.exports = router;
