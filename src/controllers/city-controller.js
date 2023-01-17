const { CityService } = require('../services/index');

const cityService = new CityService();

const create = async(req,res)=>{
    try {
        const city = await cityService.createCity(req.body)
        return res.status(201).json({
            data: city,
            success: true,
            message: 'successfully created a city',
            err: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to create a city',
            err: error
        })
    }
}



const destroy = async(req,res)=>{
    try {
        const response = await cityService.deletecity(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: 'Successfully deleted a city',
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

const get = async(req,res)=>{
    try {
        const response = await cityService.getCity(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: 'Successfully fetched the city',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to get the city',
            err: error
        })
    }
}

const update = async(req,res)=>{
    try {
        const response = await cityService.updateCity(req.params.id, req.body);
        return res.status(200).json({
            data: response,
            success: true,
            message: 'Successfully updated the city',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to update the city',
            err: error
        })
    }
}

const getAll = async(req,res)=>{
    try {
        const response = await cityService.getAllCities(req.query);
        return res.status(200).json({
            data: response,
            success: true,
            message: 'Successfully fetched the cities',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to get the cities',
            err: error
        })
    }
}

const createMany = async (req,res)=>{
    try {
        const data = req.body
        const response = await cityService.createMany(data);
        return res.status(201).json({
            data: response,
            success: true
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to create the cities',
            err: error
        })
    }
}

module.exports = {
    create,
    destroy,
    get,
    update,
    getAll,
    createMany
}