const mongoose = require('mongoose');

// Define the schema for appearance details
const appearanceSchema = new mongoose.Schema({
  height: { type: String, required: true },
  weight: { type: String, required: true },
  bodyColor: { type: String, required: true },
  drink: { type: String, required: true },
  smoke: { type: String, required: true },
  maritalStatus: { type: String, required: true },
  haveChildren: { type: String, required: true },
  noOfChild: { type: String, required: true },
  profession: { type: String, required: true },
  education: { type: String, required: true },
},
{ collection: 'register_appearance_details' });

// Create a model using the schema
const Appearance = mongoose.model('Appearance', appearanceSchema);

module.exports = Appearance;


