const express = require('express')
const { users } = require('../../controllers')
const { authMiddlevares } = require('../../middlewares/autorizationMiddlevares')




const router = express.Router()

router.get('/current', authMiddlevares, users.getCurrent)

module.exports = router;