// moredetails.model.js

const mongoose = require('mongoose');

const moreDetailsSchema = new mongoose.Schema({
  willingToRelocate: {
    type: String,
    required: true
  },
  typeOfRelation: {
    type: String,
    required: true
  },
  nationality: {
    type: String,
    required: true
  },
  language: {
    type: String,
    required: true
  },
  religion: {
    type: String,
    required: true
  }
},{ collection: 'register_more_details' });

const MoreDetails = mongoose.model('MoreDetails', moreDetailsSchema);

module.exports = MoreDetails;
