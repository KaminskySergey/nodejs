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
  })


  const Contacts = mongoose.model('contacts', contactsScheme)

  module.exports = {
    Contacts,
  };


  