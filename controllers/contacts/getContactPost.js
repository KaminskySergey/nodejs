const { Contact } = require("../../models/contactsModels")

// POST 
const getContactPost = async (req, res, next) => {
  const {_id} = req.user
    console.log(req.user._id, 'rrrrrr')
    const addItemContact = await Contact.create({...req.body, owner: _id})
    if(addItemContact){
  
      return res.status(201).json({ message: addItemContact, status: "success" })
    } else {
      res.status(404).json({ message: "Not found", status: "errorr" })
    }
  }


  module.exports = getContactPost
  