
const asyncHandler = require('express-async-handler')
const Fish = require('../models/fishModel')
const Contact = require('../models/contactModel')

const sendMail = asyncHandler(async(req,res) => {
    var nodemailer = require('nodemailer');

    const fishes = await Fish.find({ user: req.user.id })
    const contacts = await Contact.find({ user: req.user.id })
    var arr = Object.entries(fishes)
    const fishArr = []
    const contactArr = []

    var html = " <h1>Sorry for your loss</h1> <h2>These are your friend "+ req.user.name+ "'s Life Fishes</h2>  <ul>"

   arr.map((fish) => {
    fish.map((f) => {
        if(f.text != undefined) {
            fishArr.push(f.text)
            html += "<li>" + f.text + "</li>"
        }
    })
   })

   html += "</ul>"

   arr = Object.entries(contacts)
   arr.map((contact) => {
    contact.map((c) => {
        if(c.mail != undefined) {
            contactArr.push(c.mail)
        }
    })
   })



    var transport = nodemailer.createTransport({
      host: "smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD
      }
    });
    
    var mailOptions = {
      from: 'saint.fish@lifefish.com',
      to: contactArr,
      subject: "Your Friend's Life Fishes",
      text: fishArr.join('\r\n'),
      html: html,
      attachments: [
  
      ]
    };
    
    transport.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(error);
      }
      console.log('Message sent: %s', info.messageId);
    });

  res.send("sent")
  })


  module.exports = {
    sendMail
  }