const router = require('express').Router()
const ClientsController = require('../controllers/ClientController')

router.post('/', ClientsController.createClient)
router.get('/', ClientsController.getAllClients)
router.get('/:id', ClientsController.getClientById)
router.delete('/:id', ClientsController.deleteClient)

module.exports = router
