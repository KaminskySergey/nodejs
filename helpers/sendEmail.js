const sgMail = require('@sendgrid/mail')
require('dotenv').config()

const {SENDGRID_API_KEY} = process.env

sgMail.setApiKey(SENDGRID_API_KEY)

const sendEmail = async (data) => {
    const email = {...data, from: 'serezha.kaminskiy.01@gmail.com'}
    try {
        await sgMail.send(email)
        return true;
    } catch (error) {
        
    }
}

module.exports = sendEmail
// const email = {
//   to: 'kekor38654@djpich.com',
//   from: 'serezha.kaminskiy.01@gmail.com', 
//   subject: 'Sending with SendGrid is Fun',
//   text: 'and easy to do anywhere, even with Node.js',
//   html: '<a>and easy to do anywhere, even with Node.js</a>',
// }

// sgMail
//   .send(email)
//   .then(() => {
//     console.log('Email sent')
//   })
//   .catch((error) => {
//     console.error(error)
//   })