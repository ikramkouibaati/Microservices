const express = require('express');
const router = express.Router();
const db = require('../models');

// Créer une nouvelle tâche
router.post('/', async (req, res) => {
  try {
    const task = await db.Task.create(req.body);
    res.status(201).json(task);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Obtenir toutes les tâches
router.get('/', async (req, res) => {
  try {
    const tasks = await db.Task.findAll();
    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Modifier une tâche
router.put('/:id', async (req, res) => {
  try {
    const [updated] = await db.Task.update(req.body, {
      where: { id: req.params.id },
    });
    if (updated) {
      const updatedTask = await db.Task.findByPk(req.params.id);
      res.status(200).json(updatedTask);
    } else {
      res.status(404).send('Tâche non trouvée');
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Supprimer une tâche
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await db.Task.destroy({
      where: { id: req.params.id },
    });
    if (deleted) {
      res.status(204).send('Tâche supprimée');
    } else {
      res.status(404).send('Tâche non trouvée');
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
