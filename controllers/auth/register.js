const { User } = require('../../models/user')
const bcrypt = require('bcryptjs')
console.log(User)

const register = async (req, res, next) => {

const {password, email, subscription} = req.body;

const user = await User.findOne({email})
if(user){
    return res.status(409).json({ message: "Email in use" })

}   
    const hashPassword = await bcrypt.hashSync(password, bcrypt.genSaltSync(15))
    await User.create({password: hashPassword, email, subscription})
res.status(201).json({ message: "Register User", status: "success", data: {
    user: {
        email,
        subscription,
    }
} })
}

module.exports = register;