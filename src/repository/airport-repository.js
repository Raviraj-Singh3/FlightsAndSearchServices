 const { Airport } = require('../models/index');

 class AirportRepository{

    async createAirport(data){
        try {
            console.log("repo",data)
            const airport = await Airport.create(data);
            return airport;
        } catch (error) {
            console.log("something went wrong in repository layer");
            throw error;
        }
    }
    async getAirport(airportid){
        try {
            const airport = await Airport.findByPk(airportid);
            return airport;
        } catch (error) {
            console.log("something went wrong in repository layer");
            throw error;
        }
    }
    async deleteAirport(airportid){
        try {
            const airport = await Airport.destroy({
                where: {
                    id: airportid
                }
            });
            return airport;
        } catch (error) {
            console.log("something went wrong in repository layer");
            throw error;
        }
    }
 }
 module.exports = AirportRepository;