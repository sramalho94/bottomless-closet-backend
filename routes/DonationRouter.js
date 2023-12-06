const router = require('express').Router()
const DonationController = require('../controllers/DonationsController')

router.post('/', DonationController.createDonations)
router.get('/', DonationController.getAllDonations)
router.get('/:id', DonationController.getDonationsById)
router.delete('/:id', DonationController.deleteDonations)

module.exports = router
