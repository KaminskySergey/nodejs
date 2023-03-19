const express = require('express')
const { getContact,
     getContactId, 
     getContactPost, 
     getContactDelete, 
     getContactPut,
     getUpdateStatusContact,
    } = require('../../controllers/contactsControlles')
const { addValidation, addValidationFavorite } = require('../../middlewares/validationMiddlevares')


const router = express.Router()

router.get('/', getContact)

router.get('/:contactId', getContactId)

router.post('/', addValidation, getContactPost)

router.put('/:contactId', addValidation, getContactPut)

router.patch('/:contactId/:favorite', addValidationFavorite, getUpdateStatusContact)

router.delete('/:contactId', getContactDelete)


module.exports = router

