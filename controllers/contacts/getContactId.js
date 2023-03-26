const { Contact } = require("../../models/contactsModels");

// SEARCH ID
const getContactId = async (req, res, next) => {
    const { contactId } = req.params;
    
      const getItemId = await Contact.findById(contactId)
      
      if(getItemId){
        return res.status(200).json({ message: getItemId, status: "success" })
      }
      else {
        res.status(404).json({ message: 'not ID', status: "error" })
      }
      
    }


    module.exports = getContactId
