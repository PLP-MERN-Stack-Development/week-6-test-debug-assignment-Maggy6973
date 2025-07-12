const express = require('express');
const Bug = require('../models/Bug');
const { validateBug } = require('../utils/validation');

const router = express.Router();

// GET all bugs
router.get('/', async (req, res) => {
  try {
    const bugs = await Bug.find().sort({ createdAt: -1 });
    res.json(bugs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST create bug
router.post('/', async (req, res) => {
  try {
    const validation = validateBug(req.body);
    if (!validation.isValid) {
      return res.status(400).json({ message: validation.errors.join(', ') });
    }

    const bug = new Bug(req.body);
    await bug.save();
    res.status(201).json(bug);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// PUT update bug
router.put('/:id', async (req, res) => {
  try {
    const bug = await Bug.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!bug) return res.status(404).json({ message: 'Bug not found' });
    res.json(bug);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE bug
router.delete('/:id', async (req, res) => {
  try {
    const bug = await Bug.findByIdAndDelete(req.params.id);
    if (!bug) return res.status(404).json({ message: 'Bug not found' });
    res.json({ message: 'Bug deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;