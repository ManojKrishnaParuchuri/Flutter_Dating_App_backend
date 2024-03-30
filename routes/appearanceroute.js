const express = require('express');
const router = express.Router();
const Appearance = require('../models/apperancemodel');

// Route to save appearance details
router.post('/appearance', async (req, res) => {
  try {
    // Create new Appearance instance with request body
    const appearance = new Appearance({
      height: req.body.height,
      weight: req.body.weight,
      bodyColor: req.body.bodyColor,
      drink: req.body.drink,
      smoke: req.body.smoke,
      maritalStatus: req.body.maritalStatus,
      haveChildren: req.body.haveChildren,
      noOfChild: req.body.noOfChild,
      profession: req.body.profession,
      education: req.body.education,
    });

    // Save appearance details to MongoDB
    await appearance.save();
    res.status(201).send(appearance);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error saving appearance details');
  }
});

module.exports = router;
