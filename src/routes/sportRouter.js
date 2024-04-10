const express = require('express')
const router = express.Router()
const sportController = require('../controllers/sportController')

router.get('/', sportController.getAllSports)
router.post('/', sportController.postSport)
router.get('/:id', sportController.getSportById)
router.put('/:id', sportController.putSport)
router.delete('/:id', sportController.deleteSport)

module.exports = router
