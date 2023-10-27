const mongoose = require('mongoose');

const bloodBankSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  staff: { type: String, required: true },
  bloodstock: { type: String, required: true },
});

module.exports = mongoose.model('Bank', bloodBankSchema);
