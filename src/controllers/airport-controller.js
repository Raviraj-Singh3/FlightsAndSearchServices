const { AirportService } = require('../services/index');

const airportService = new AirportService();

const createAirport = async(req,res) => {
    try {
        const response = await airportService.create(req.body);
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
        const response = await airportService.get(req.params.id);
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
        const response = await airportService.update(req.params.id, req.body);
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

const destroy = async(req,res)=>{
    try {
        const response = await airportService.destroy(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: 'Successfully deleted an airport',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to delete the city',
            err: error
        })
    }
}
module.exports = {
    createAirport,
    getAirport,
    updateAirport,
    destroy
}