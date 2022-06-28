const asyncHandler = require('express-async-handler')

// @desc Get fishes
// @route GET /api/fishes
// @access Private
const getFishes = asyncHandler(async(req,res) => {
    res.status(200).json({ message: 'Get fishes'})
})

// @desc Set fish
// @route POST /api/fishes
// @access Private
const setFish = asyncHandler(async(req,res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
      }

    res.status(200).json({ message: 'Set fish'})
})

// @desc Update fish
// @route PUT /api/fishes/:id
// @access Private
const updateFish = asyncHandler(async(req,res) => {
    res.status(200).json({ message: `Update fish ${req.params.id}`})
})

// @desc Delete fish
// @route DELETE /api/fishes/:id
// @access Private
const deleteFish = asyncHandler(async(req,res) => {
    res.status(200).json({ message: `Delete fish ${req.params.id}`})
})

module.exports = {
    getFishes,
    setFish,
    updateFish,
    deleteFish
}