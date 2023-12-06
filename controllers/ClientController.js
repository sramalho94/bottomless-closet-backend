const { Client } = require('../models')

class ClientController {
  async createClient(req, res) {
    try {
      const client = await Client.create(req.body)
      res.status(201).json({ client })
    } catch (err) {
      res.status(400).json({ error: err.message })
    }
  }

  async deleteClient(req, res) {
    try {
      const { id } = req.params
      const deleted = await Client.destroy({
        where: { id: id },
      })
      if (deleted) {
        return res.status(204).send('Client deleted')
      }
      throw new Error('Client not found')
    } catch (error) {
      return res.status(500).send(error.message)
    }
  }

  async getAllClients(req, res) {
    try {
      const clients = await Client.findAll()
      res.status(200).json(clients)
    } catch (err) {
      res.status(400).json(err)
    }
  }

  async getClientById(req, res) {
    try {
      const client = await Client.findByPk(req.params.id)
      res.status(200).json(client)
    } catch (err) {
      res.status(400).json(err)
    }
  }
}

module.exports = new ClientController()
