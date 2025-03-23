
const express = require('express');
const redis = require('../config/redis');
const router = express.Router();
const FoodMenu = require('../models/FoodMenu')

// Create a new user
router.post('/', async (req, res) => {
  try {
    const user = await FoodMenu.create(req.body);
    await redis.del('menuList');

    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get('/', async (req, res) => {
  const cache = await redis.get('menuList');

  if (cache) {
    return res.json(JSON.parse(cache));
  }
    try {
      const menuList = await FoodMenu.findAll();
      await redis.set('menuList', JSON.stringify(menuList), { EX: 600 }); // cache for 60 sec

      res.status(200).json(menuList);

    } catch (err) {
      res.status(400).json({ error: err.message });
    }

  });

router.put('/:id', async (req, res) => {
  try {
    const user = await FoodMenu.findByPk(req.params.id);
    if (user) {
      await user.update(req.body);
      await redis.del('menuList');
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
    const user = await FoodMenu.findByPk(req.params.id);
    if (user) {
      await user.destroy();
      res.status(204).send();
      await redis.del('menuList');

    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});
module.exports = router;
