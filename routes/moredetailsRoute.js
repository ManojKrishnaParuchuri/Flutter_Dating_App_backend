const express = require('express');
const router = express.Router();
const MoreDetails = require('../models/moredetails');

// Route to handle POST requests to save more details
router.post('/moredetails', async (req, res) => {
  try {
    // Extract data from request body
    const { willingToRelocate, typeOfRelation, nationality, language, religion } = req.body;

    // Create a new MoreDetails instance
    const newDetails = new MoreDetails({
      willingToRelocate,
      typeOfRelation,
      nationality,
      language,
      religion
    });

    // Save the new details to the database
    await newDetails.save();

    // Send a success response
    res.status(201).json({ message: 'Details saved successfully' });
  } catch (error) {
    // Send an error response if something goes wrong
    console.error('Error saving details:', error);
    res.status(500).json({ message: 'Failed to save details' });
  }
});

module.exports = router;
