const { Contact } = require('../../models/contactsModels')
console.log(Contact)

    // READ
const getContact = async (req, res, next) => {
    const {_id} = req.user
    
    const {page = 1, limit = 10} = req.query
    const skip = (page - 1) * limit;
    const getListAll = await Contact.find({owner: _id}, "", {skip, limit: Number(limit)}).populate('owner', "email subscription")
    res.status(200).json({ message: getListAll, status: "success" })
    
  }


  module.exports = getContact