const asyncHandler = require('express-async-handler')

const Fish = require('../models/fishModel')

// @desc Get fishes
// @route GET /api/fishes
// @access Private
const getFishes = asyncHandler(async(req,res) => {
    const fishes = await Fish.find()

    res.status(200).json({fishes})
})

// @desc Set fish
// @route POST /api/fishes
// @access Private
const setFish = asyncHandler(async(req,res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
      }

      const fish = await Fish.create({
        text: req.body.text
      })

    res.status(200).json(fish)
})

// @desc Update fish
// @route PUT /api/fishes/:id
// @access Private
const updateFish = asyncHandler(async(req,res) => {
    const fish = await Fish.findById(req.params.id)
  
    if(!fish){
        res.status(400)
        throw new Error('Fish not found')
    }
    
    const updatedFish = await Fish.findByIdAndUpdate(req.params.id, req.body, {new: true,
    })

    res.status(200).json(updatedFish)
})

// @desc Delete fish
// @route DELETE /api/fishes/:id
// @access Private
const deleteFish = asyncHandler(async(req,res) => {
    const fish = await Fish.findById(req.params.id)

    if(!fish){
        res.status(400)
        throw new Error('Fish not found')
    }
    await Fish.remove()

    res.status(200).json({ id: req.params.id })
})

module.exports = {
    getFishes,
    setFish,
    updateFish,
    deleteFish
}