const { FlightRepository, AirplaneRepository } = require('../repository/index');

class FlightService{
    constructor(){
        this.flightRepository = new FlightRepository();
        this.airplaneRepository = new AirplaneRepository();
    }

    async createFight(data){
        try {
            const airplane = await this.airplaneRepository.getAirplane(data.airplaneId);
            console.log(airplane);
            const flight = await this.flightRepository.createFlight({
                ...data, totalSeats: airplane.capacity
            });
            return flight;
        } catch (error) {
            console.log("something went wrong at service layer");
            throw error;
        }
    }
}
module.exports = FlightService;