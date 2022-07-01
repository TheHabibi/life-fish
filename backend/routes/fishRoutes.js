const express = require('express')
const router = express.Router()
const {getFishes, setFish, updateFish, deleteFish} = require('../controllers/fishController')

const {protect} = require('../middleware/authMiddleware')

router.route('/').get(protect, getFishes).post(protect, setFish)
router.route('/:id').delete(protect, deleteFish).put(protect, updateFish)

module.exports = router