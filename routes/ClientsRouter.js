const router = require('express').Router()
const ClientController = require('../controllers/ClientController')

router.post('/clients', ClientController.createClient);
router.get('/clients', ClientController.getAllClients);
router.get('/clients/:id', ClientController.getClientById);
router.delete('/clients/:id', ClientController.deleteClient);

module.exports = router
