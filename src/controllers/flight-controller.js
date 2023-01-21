const { FlightService } = require('../services/index');
 
const flightService = new FlightService();

const create = async (req,res) => {

    try {
        const flight = await flightService.createFight(req.body);
        return res.status(200).json({
            data: flight,
            success: true,
            message: 'successfully created a flight',
            err: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to create a flight',
            err: error
        })
    }

}

const getAll = async(req,res) => {
    try {
        const response = await flightService.getAll(req.query);
        return res.status(200).json({
            data: response,
            success: true,
            message: 'successfully fetched the airports'
        })
    } catch (error) {
        return res.status(501).json({
            data: {},
            err: error,
            message: 'not able to fetch the airport'
        })
    }
}
module.exports = {
    create,
    getAll
}