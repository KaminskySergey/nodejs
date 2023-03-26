const { Contact } = require("../../models/contactsModels")

// PATCH
const getUpdateStatusContact = async (req, res, next) => {
    
    const patchItem = await Contact.findByIdAndUpdate(req.params.contactId, req.body, {new: true})
    
    if(patchItem){
      return res.status(200).json({ message: patchItem, status: "success" })
    } 
      return res.status(404).json({ message: "Not found" })
  }

  module.exports = getUpdateStatusContact
  