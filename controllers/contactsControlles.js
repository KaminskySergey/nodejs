// const {  getContactById, addContact, removeContact, updateContact } = require("../models/contacts")
const { Contacts } = require('../models/contactsModels')


    // READ
const getContact = async (req, res, next) => {
    const getListAll = await Contacts.find({})
    res.status(200).json({ message: getListAll, status: "success" })
    
  }
  
// SEARCH ID
const getContactId = async (req, res, next) => {
  const { contactId } = req.params;
  
    const getItemId = await Contacts.findById(contactId)
    
    if(getItemId){
      return res.status(200).json({ message: getItemId, status: "success" })
    }
    else {
      res.status(404).json({ message: 'not ID', status: "error" })
    }
    
  }
// POST 
const getContactPost = async (req, res, next) => {
  
    const addItemContact = await Contacts.create(req.body)
    if(addItemContact){
  
      return res.status(201).json({ message: addItemContact, status: "success" })
    } else {
      res.status(404).json({ message: "Not found", status: "errorr" })
    }
  }
// DELETE
const getContactDelete = async (req, res, next) => {
    const deleteItemId = await Contacts.findByIdAndRemove(req.params.contactId)
    if(deleteItemId){
      return res.status(200).json({ message: "contact deleted", status: "success" })
    } 
      return res.status(404).json({ message: "Not found" })
    
  }

// CHANGE
const getContactPut = async (req, res, next) => {
    const putItem = await Contacts.findByIdAndUpdate(req.params.contactId, req.body, {new: true})
    res.status(200).json({ message: putItem, status: "success" })
  }

// PATCH
const getUpdateStatusContact = async (req, res, next) => {
    
    const patchItem = await Contacts.findByIdAndUpdate(req.params.contactId, req.body, {new: true})
    
    if(patchItem){
      return res.status(200).json({ message: patchItem, status: "success" })
    } 
      return res.status(404).json({ message: "Not found" })
  }


module.exports = {
    getContact,
    getContactId,
    getContactPost,
    getContactDelete,
    getContactPut,
    getUpdateStatusContact,

}