const express = require('express')
const { authValidation, loginValidation } = require('../../middlewares/validationMiddlevares')
const { authMiddlevares } = require('../../middlewares/autorizationMiddlevares')

const { auth } = require('../../controllers')




const router = express.Router() 

router.post('/register', authValidation,  auth.register)
router.post('/login', loginValidation,  auth.login)
router.get('/logout', authMiddlevares, auth.logout)

module.exports = router;