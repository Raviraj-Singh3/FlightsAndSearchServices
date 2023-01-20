const express = require('express');
const CityController = require('../../controllers/city-controller');
const { AirportController } = require('../../controllers/index');
// const FlightController = require('../../controllers/flight-controller');

const router = express.Router();

router.post('/city', CityController.create);
router.delete('/city/:id', CityController.destroy);
router.get('/city/:id', CityController.get);
router.get('/city/', CityController.getAll);
router.patch('/city/:id', CityController.update);

//router.post('/createMany', CityController.createMany);
//router.post('/flights', FlightController.create);

// router.post('/airport', AirportController.createAirport);
// router.get('/airport/:id', AirportController.getAirport);
// router.patch('/airport/:id', AirportController.updateAirport);
router.post('/airport', AirportController.createAirport);
router.get('/airport/:id', AirportController.getAirport);
router.delete('/airport/:id', AirportController.destroy)

module.exports = router;