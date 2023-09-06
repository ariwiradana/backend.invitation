const Wishes = require("../model/wishes.model");

const getWishes = async (req, res) => {
  const { limit } = req.query;

  try {
    let wishes;
    if (limit) {
      wishes = await Wishes.find({}).limit(limit).sort({ created_at: -1 });
    } else {
      wishes = await Wishes.find({}).sort({ created_at: -1 });
    }
    res.status(200).json(wishes);
  } catch (error) {
    res.status(500).json(error);
  }
};

const setWishes = async (req, res) => {
  const { name, message, created_at, attend } = req.body;
  try {
    const response = await Wishes.create({
      name,
      message,
      created_at,
      attend,
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  getWishes,
  setWishes,
};
