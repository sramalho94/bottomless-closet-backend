const router = require('express').Router();
const DonationController = require('../controllers/DonationController');

router.post('/donation', DonationController.create);
router.get('/donation', DonationController.getAll);
router.get('/donation/:id', DonationController.getOne);
router.put('/donation/:id', DonationController.update);
router.delete('/donation/:id', DonationController.delete);

module.exports = router;
