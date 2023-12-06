const router = require('express').Router()
const InitiativeController = require('../controllers/InitiativeController')

router.get('/', InitiativeController.getAllInitiatives)
router.post('/', InitiativeController.createInitiative)
router.get('/:id', InitiativeController.getInitiativeById)
router.delete('/:id', InitiativeController.deleteInitiative)

module.exports = router
