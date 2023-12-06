const router = require('express').Router()
const DonorController = require('../controllers/DonorController')

router.post('/donor', DonorController.createDonor)
router.get('/donor', DonorController.getAllDonors)
router.get('/donor/:id', DonorController.getDonorById)
router.delete('/donor/:id', DonorController.deleteDonor)

module.exports = router
