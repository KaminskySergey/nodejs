const express = require('express')
const { contacts } = require('../../controllers')
const { addValidation, addValidationFavorite } = require('../../middlewares/validationMiddlevares')
const { authMiddlevares } = require('../../middlewares/autorizationMiddlevares')



const router = express.Router()

router.get('/', authMiddlevares, contacts.getContact)

router.get('/:contactId', contacts.getContactId)

router.post('/', authMiddlevares, addValidation, contacts.getContactPost)

router.put('/:contactId', addValidation, contacts.getContactPut)

router.patch('/:contactId/:favorite', addValidationFavorite, contacts.getUpdateStatusContact)

router.delete('/:contactId', contacts.getContactDelete)


module.exports = router

