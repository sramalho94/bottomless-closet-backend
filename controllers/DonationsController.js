const { Donation, Donor } = require('../models')

class DonationsController {
  async createDonations(req, res) {
    try {
      const donations = await Donation.create(req.body)
      res.status(201).json({ donations })
    } catch (err) {
      res.status(400).json({ error: err.message })
    }
  }

  async deleteDonations(req, res) {
    try {
      const { id } = req.params
      const deleted = await Donation.destroy({
        where: { id: id },
      })
      if (deleted) {
        return res.status(204).send('Donations deleted')
      }
      throw new Error('Donations not found')
    } catch (error) {
      return res.status(500).send(error.message)
    }
  }

  async getAllDonations(req, res) {
    try {
      const donations = await Donation.findAll({ include: [{ model: Donor }] })
      res.status(200).json(donations)
    } catch (err) {
      res.status(400).json(err)
    }
  }

  async getDonationsById(req, res) {
    try {
      const donations = await Donation.findByPk(req.params.id, {
      include: [{ model: Donor }]})
      res.status(200).json(donations)
    } catch (err) {
      res.status(400).json(err)
    }
  }
}

module.exports = new DonationsController()
