//import nodemailer
const nodemailer = require('nodemailer')
require('dotenv').config()

// Creamos nuestro transportador 
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: '465',
  secure: true,
  auth: {
    user: 'ronaldosena1998@gmail.com',
    pass: process.env.G_PASSWORD,
  },
})

module.exports = transporter
