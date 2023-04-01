const { User } = require('../../models/user')
const path = require("path")
const fs = require("fs/promises")
const Jimp = require("jimp");

const avatarsDir = path.join(__dirname, '../../', 'public', 'avatars')


const updateAvatar = async (req, res) => {
    const {path: tempUpload, originalname} = req.file
    const {_id: id} = req.user
    const imageName = `${id}_${originalname}`
try {
    const result = path.join(avatarsDir, imageName)
    await fs.rename(tempUpload, result)
    const avatarURL = path.join("public", "avatars", imageName)
    
    Jimp.read(avatarURL)
  .then((avatar) => {
    return avatar.resize(250, 250).write(avatar); 
  })
  .catch((err) => {
    console.error(err);
  });
    await User.findByIdAndUpdate(req.user._id, {avatarURL})
    res.json({avatarURL})
} catch (error) {
    await fs.unlink()
}
}



module.exports = updateAvatar;
