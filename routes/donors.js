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

// Search donors by blood type
router.get('/search', async (req, res) => {
  const bloodType = req.query.bloodType;
  const donors = await Donor.find({ bloodType: bloodType });
  res.render('searchDonors', { donors: donors });
});

// Find donors
router.get('/', async (req, res) => {
  const donors = await Donor.find();
  res.render('findDonors', { donors: donors });
});

router.get('/banks', async (req, res) => {
  const donors = await Donor.find();
  res.render('bloodBank', { donors: donors });
});

router.get('/about', (req, res) => {
  res.render('aboutUs.ejs');
});

router.get('/add', (req, res) => {
  res.render('addDonor.ejs');
});

// Update a donor
router.post('/update', async (req, res) => {
  const donorId = req.body.donorId;
  const { name, phone, address, bloodType } = req.body;
  try {
    await Donor.findByIdAndUpdate(donorId, { name, phone, address, bloodType });
    res.sendStatus(200);
  } catch (err) {
    console.error('Error updating donor:', err);
    res.sendStatus(500); // Send an error status code if there is an error
  }
});

router.get('/remove', (req, res) => {
  res.render('removeDonor.ejs');
});

module.exports = router;
