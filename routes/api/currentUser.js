const express = require('express')
const { users } = require('../../controllers')
const { authMiddlevares } = require('../../middlewares/autorizationMiddlevares')
const uploadMiddlevares = require('../../middlewares/uploadMiddlevares')

console.log(users.updateAvatar, 'ereeeeeeeeeeterterte')



const router = express.Router()

router.get('/current', authMiddlevares, users.getCurrent)
router.patch('/avatars', authMiddlevares, uploadMiddlevares.single('avatar'), users.updateAvatar )

module.exports = router;