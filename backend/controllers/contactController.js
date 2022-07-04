const asyncHandler = require('express-async-handler')

const Contact = require('../models/contactModel')
const User = require('../models/userModel')

// @desc Get fishes
// @route GET /api/fishes
// @access Private
const getContacts = asyncHandler(async(req,res) => {
   
    const contacts = await Contact.find({ user: req.user.id })

    res.status(200).json({contacts})
})

// @desc Set fish
// @route POST /api/fishes
// @access Private
const setContact = asyncHandler(async(req,res) => {
    if (!req.body.mail) {
        res.status(400)
        throw new Error('Please add a text field')
      }

      const contact = await Contact.create({
        mail: req.body.mail,
        user: req.user.id
      })

    res.status(200).json(contact)
})





// @desc Update fish
// @route PUT /api/fishes/:id
// @access Private
const updateContact = asyncHandler(async(req,res) => {
    const contact = await Contact.findById(req.params.id)
  
    if(!contact){
        res.status(400)
        throw new Error('Contact not found')
    }



    //Check for user
    if(!req.user) {
        res.status(401)
        throw new Error('User not found')
    }

    // Make sure the logged in user matches the goal user
    if(contact.user.toString() !== req.user.id){
        res.status(401)
        throw new Error('User not authorized')
    }
    
    const updatedContact = await Contact.findByIdAndUpdate(req.params.id, req.body, {new: true,
    })

    res.status(200).json(updatedContact)
})

// @desc Delete fish
// @route DELETE /api/fishes/:id
// @access Private
const deleteContact = asyncHandler(async(req,res) => {
    const contact = await Contact.findById(req.params.id)

    if(!contact){
        res.status(400)
        throw new Error('Contact not found')
    }

  

    //Check for user
    if(!req.user) {
        res.status(401)
        throw new Error('User not found')
    }

    // Make sure the logged in user matches the goal user
    if(contact.user.toString() !== req.user.id){
        res.status(401)
        throw new Error('User not authorized')
    }

    await Contact.deleteOne()

    res.status(200).json({ id: req.params.id })
})

module.exports = {
    getContacts,
    setContact,
    updateContact,
    deleteContact
}