const router = require('express').Router()
const DonorController = require('../controllers/DonorController')

router.post('/donor', DonorController.createDoner)
router.get('/donor', DonorController.getAllDoners)
router.get('/donor/:id', DonorController.getDonerById)
router.delete('/donor/:id', DonorController.deleteDoner)

module.exports = router
