const express = require('express');
const router = express.Router();
const RingColor = require('../models/RingColor');

// GET the current latest color
router.get('/', async (req, res) => {
  try {
    const color = await RingColor.findOne();
    res.json(color);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST a new color or update the existing one
router.post('/', async (req, res) => {
  try {
    await RingColor.findOneAndUpdate(
      {},
      req.body,
      { upsert: true, new: true }
    );
    res.status(200).json({ message: 'Color updated successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


module.exports = router;
