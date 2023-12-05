const { Donor } = require("../models");

class DonorController {
  async createDoner(req, res) {
    try {
      const donor = await Donor.create(req.body);
      res.status(201).json({ donor });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  async deleteDoner(req, res) {
    try {
      const { id } = req.params;
      const deleted = await Donor.destroy({
        where: { id: id },
      });
      if (deleted) {
        return res.status(204).send("Donor deleted");
      }
      throw new Error("User not found");
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }

  async getAllDoners(req, res) {
    try {
      const doners = await Donor.findAll();
      res.status(200).json(doners);
    } catch (err) {
      res.status(400).json(err);
    }
  }

  async getDonerById(req, res) {
    try {
      const doner = await Donor.findByPk(req.params.id);
      res.status(200).json(doner);
    } catch (err) {
      res.status(400).json(err);
    }
  }
}

module.exports = new DonorController();
