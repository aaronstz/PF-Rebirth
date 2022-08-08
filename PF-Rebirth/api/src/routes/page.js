const { Router } = require("express");
const router = Router();
const { findAll, filterPets } = require('../controllers/filterPets.controller.js');
const { findAllLocations } = require('../controllers/locations.controller.js');

router.get('/', filterPets);

router.get("/locations", findAllLocations)

module.exports = router;