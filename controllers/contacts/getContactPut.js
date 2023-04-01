const { Contact } = require("../../models/contactsModels")

// CHANGE
const getContactPut = async (req, res, next) => {
    const putItem = await Contact.findByIdAndUpdate(req.params.contactId, req.body, {new: true})
    res.status(200).json({ message: putItem, status: "success" })
  }


  module.exports = getContactPut
  