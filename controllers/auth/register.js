const { User } = require('../../models/user')
const bcrypt = require('bcryptjs')
const gravatar = require('gravatar');
console.log(User)

const register = async (req, res, next) => {

const {password, email, subscription} = req.body;

const user = await User.findOne({email})
if(user){
    return res.status(409).json({ message: "Email in use" })

}   
    const avatarURL = gravatar.url(email)
    const hashPassword = await bcrypt.hashSync(password, bcrypt.genSaltSync(15))
    await User.create({password: hashPassword, email, subscription, avatarURL})
res.status(201).json({ message: "Register User", status: "success", data: {
    user: {
        email,
        subscription,
        avatarURL,
    }
} })
}

module.exports = register;