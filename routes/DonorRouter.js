const router = require('express').Router();
const DonorController = require('../controllers/DonorController');

router.post('/donor', DonorController.create);
router.get('/donor', DonorController.getAll);
router.get('/donor/:id', DonorController.getOne);
router.put('/donor/:id', DonorController.update);
router.delete('/donor/:id', DonorController.delete);

module.exports = router;
