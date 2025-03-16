
const express = require('express');

const router = express.Router();
const Menu = require('../models/FoodMenu')

// Create a new user
router.post('/', async (req, res) => {
  try {
    const user = await Menu.create(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get('/', async (req, res) => {
    try {
      const users = await Menu.findAll();
      res.status(200).json(users);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  });

router.put('/:id', async (req, res) => {
  try {
    const user = await Menu.findByPk(req.params.id);
    if (user) {
      await user.update(req.body);
      res.status(200).json(user);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete user
router.delete('/:id', async (req, res) => {
  try {
    const user = await Menu.findByPk(req.params.id);
    if (user) {
      await user.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});
module.exports = router;
