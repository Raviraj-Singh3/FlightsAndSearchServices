const AirportRepository = require('../repository/airport-repository');

 class AirportService{
    constructor(){
        this.airportRepository = new AirportRepository();
    }

    async createAirport(data){
        try {
            console.log(data);
            console.log(this.airportRepository);
            const airport = await this.airportRepository.createAirport(data);
            console.log(airport);
            return airport;
        } catch (error) {
            console.log("something went wrong in service layer");
            throw error
        }
    }
    async getAirport(id){
        try {
            const airport = await this.airportRepository.getAirport(id);
            return airport;
        } catch (error) {
            console.log("something went wrong in service layer");
            throw error
        }
    }
 }
 module.exports = AirportService;