const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    required: true,
  },
  phoneNo: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  partner: {
    type: String,
    required: true,
  },
  height: { type: String, required: true },
  weight: { type: String, required: true },
  bodyColor: { type: String, required: true },
  drink: { type: String, required: true },
  smoke: { type: String, required: true },
  haveChildren: { type: String, required: true },
  noOfChild: { type: String, required: true },
  education: { type: String, required: true },
  profession: { type: String, required: true }, 
}, { collection: 'user_Details' }); // Specify the collection name here

module.exports = mongoose.model('User', userSchema);
