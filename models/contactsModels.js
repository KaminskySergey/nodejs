const mongoose = require('mongoose');

const contactsScheme = new mongoose.Schema({
    name: {
      type: String,
      required: [true, 'Set name for contact'],
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
    }
  })


  const Contact = mongoose.model('contact', contactsScheme)

  module.exports = {
    Contact,
  };


  