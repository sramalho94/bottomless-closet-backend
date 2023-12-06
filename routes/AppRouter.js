const Router = require('express').Router()
const DonorRouter = require('./DonorRouter')
const DonationRouter = require('./DonationRouter')
const ClientsRouter = require('./ClientsRouter')
const InitiativeRouter = require('./InitiativeRouter')

// Router.get('/', (req, res) => res.json({ message: 'API Router Works' }));
Router.use('/donors', DonorRouter)
Router.use('/donation', DonationRouter)
Router.use('/client', ClientsRouter)
Router.use('/initiative', InitiativeRouter)

module.exports = Router
