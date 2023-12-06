const { Donor } = require("../models");

class DonorController {
  async createDonor(req, res) {
    try {
      const donor = await Donor.create(req.body);
      res.status(201).json({ donor });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  async deleteDonor(req, res) {
    try {
      const { id } = req.params;
      const deleted = await Donor.destroy({
        where: { id: id },
      });
      if (deleted) {
        return res.status(204).send("Donor deleted");
      }
      throw new Error("Donor not found");
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }

  async getAllDonors(req, res) {
    try {
      const donors = await Donor.findAll();
      res.status(200).json(donors);
    } catch (err) {
      res.status(400).json(err);
    }
  }

  async getDonorById(req, res) {
    try {
      const donor = await Donor.findByPk(req.params.id);
      res.status(200).json(donor);
    } catch (err) {
      res.status(400).json(err);
    }
  }
}

module.exports = new DonorController();
