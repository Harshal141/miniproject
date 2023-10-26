const express = require('express');
const router = express.Router();
const Donor = require('../models/Donor');

// Add a donor
router.post('/add', async (req, res) => {
  const { name, phone, address, bloodType } = req.body;
  const newDonor = new Donor({ name, phone, address, bloodType });
  await newDonor.save();
  res.redirect('/');
});

// Remove a donor
router.post('/remove', async (req, res) => {
  const donorId = req.body.donorId;
  await Donor.findByIdAndRemove(donorId);
  res.redirect('/');
});

// Find donors
router.get('/', async (req, res) => {
  const donors = await Donor.find();
  res.render('findDonors', { donors: donors });
});

router.get('/add', (req, res) => {
  res.render('addDonor.ejs');
});

router.get('/remove', (req, res) => {
  res.render('removeDonor.ejs');
});

module.exports = router;
