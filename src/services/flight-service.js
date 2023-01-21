const { FlightRepository, AirplaneRepository } = require('../repository/index');
const { compareTime } = require('../utils/helper')
const { Op } = require('sequelize')
class FlightService{
    constructor(){
        this.flightRepository = new FlightRepository();
        this.airplaneRepository = new AirplaneRepository();
    }
    async createFight(data){
        try {
            if(!compareTime(data.arrivalTime, data.departureTime)){
                throw {error: 'arrival time cannot be less then departure time'}
            }
            const airplane = await this.airplaneRepository.getAirplane(data.airplaneId);
            const flight = await this.flightRepository.createFlight({
                ...data, totalSeats: airplane.capacity
            });
            return flight;
        } catch (error) {
            console.log("something went wrong at service layer");
            throw error;
        }
    }

    async getAll(filter){
        try {
            const flight = await this.flightRepository.getAll(filter);
            return flight;
        } catch (error) {
            console.log("something went wrong at service layer");
            throw error;
        }
    }
}
module.exports = FlightService;