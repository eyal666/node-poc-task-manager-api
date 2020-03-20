const sgMail = require('@sendgrid/mail')
const { sendgridAPIKey } = require('../../config/config')

sgMail.setApiKey(sendgridAPIKey)

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'eyal.roman@gmail.com',
    subject: 'Thanks for joining in!',
    text: `Welcome to Task App, ${name} !`
  })
}

const sendByeByeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'eyal.roman@gmail.com',
    subject: 'Don\'t leave us :\'(',
    text: `Hey ${name} ! \nWe\'re sorry to hear that you are leaving us...`
  })
}

module.exports = { sendWelcomeEmail, sendByeByeEmail }