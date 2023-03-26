const { Contact } = require("../../models/contactsModels")

// DELETE
const getContactDelete = async (req, res, next) => {
    const deleteItemId = await Contact.findByIdAndRemove(req.params.contactId)
    if(deleteItemId){
      return res.status(200).json({ message: "contact deleted", status: "success" })
    } 
      return res.status(404).json({ message: "Not found" })
    
  }

  module.exports = getContactDelete
  