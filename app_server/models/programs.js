const mongoose = require('mongoose');

const programSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  about: {
    type: String,
    required: true
  },
  news: {
    type: String
  },
  application: {
    type: String
  },
  resources: {
    type: String
  }
});

mongoose.model('Program', programSchema);
