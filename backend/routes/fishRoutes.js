const express = require('express')
const router = express.Router()

router.get('/', (req,res) => {
    res.status(200).json({ message: 'Get fish'})
})

router.post('/', (req,res) => {
    res.status(200).json({ message: 'Set fish'})
})

router.put('/:id', (req,res) => {
    res.status(200).json({ message: `Update fish ${req.params.id}`})
})

router.delete('/:id', (req,res) => {
    res.status(200).json({ message: `Delete fish ${req.params.id}`})
})

module.exports = router