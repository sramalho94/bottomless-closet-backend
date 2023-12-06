const { Initiative } = require('../models')

class InitiativeController {
  async createInitiative(req, res) {
    try {
      const initiative = await Initiative.create(req.body)
      res.status(201).json({ initiative })
    } catch (err) {
      res.status(400).json({ error: err.message })
    }
  }

  async deleteInitiative(req, res) {
    try {
      const { id } = req.params
      const deleted = await Initiative.destroy({
        where: { id: id },
      })
      if (deleted) {
        return res.status(204).send('Initiative deleted')
      }
      throw new Error('Initiative not found')
    } catch (error) {
      return res.status(500).send(error.message)
    }
  }

  async getAllInitiatives(req, res) {
    try {
      const initiatives = await Initiative.findAll()
      res.status(200).json(initiatives)
    } catch (err) {
      res.status(400).json(err)
    }
  }

  async getInitiativeById(req, res) {
    try {
      const initiative = await Initiative.findByPk(req.params.id)
      res.status(200).json(initiative)
    } catch (err) {
      res.status(400).json(err)
    }
  }
}

module.exports = new InitiativeController()
