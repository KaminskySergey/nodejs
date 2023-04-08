const { User } = require('../../models/user')
const bcrypt = require('bcryptjs')
const gravatar = require('gravatar');
const {nanoid} = require('nanoid')

const {sendEmail} = require('../../helpers')
// console.log(sendEmail)
const register = async (req, res, next) => {

const {password, email, subscription} = req.body;

const user = await User.findOne({email})
if(user){
    return res.status(409).json({ message: "Email in use" })
    
}   
const verificationToken = nanoid()
    const avatarURL = gravatar.url(email)
    const hashPassword = await bcrypt.hashSync(password, bcrypt.genSaltSync(15))
    
    await User.create({password: hashPassword, email, subscription, avatarURL, verificationToken})

    const mail = {
        to: email,
        subject: 'Щось підтвердити',
        html: `<a target="_blank" href="http://licalhost:3000/api/users/verify/${verificationToken}">Підтвердити email</a>`
    }
    await sendEmail(mail)

    res.status(201).json({ message: "Register User", status: "success", data: {
    user: {
        email,
        subscription,
        avatarURL,
        verificationToken,
    }
} })
}

module.exports = register;