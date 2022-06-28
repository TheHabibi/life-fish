const express = require('express')
const router = express.Router()
const {getFishes, setFish, updateFish, deleteFish} = require('../controllers/fishController')

router.route('/').get(getFishes).post(setFish)
router.route('/:id').delete(deleteFish).put(updateFish)

module.exports = router