const AirportService = require('../services/airport-service');

const airportService = new AirportService();

const createAirport = async(req,res) => {
    try {
        const response = await airportService.createAirport(req.body);
        return res.status(200).json({
            data: response,
            success: true,
            message: 'successfully created an airport'
        })
    } catch (error) {
        return res.status(501).json({
            data: {},
            err: error
        })
    }
}


const getAirport = async(req,res) => {
    try {
        const response = await airportService.getAirport(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: 'successfully fetched an airport'
        })
    } catch (error) {
        return res.status(501).json({
            data: {},
            err: error
        })
    }
}
const updateAirport = async(req,res) => {
    try {
        const response = await airportService.updateAirport(req.params.id, req.body);
        return res.status(200).json({
            data: response,
            success: true,
            message: 'successfully updated an airport'
        })
    } catch (error) {
        return res.status(501).json({
            data: {},
            err: error
        })
    }
}
module.exports = {
    createAirport,
    getAirport,
    updateAirport
}