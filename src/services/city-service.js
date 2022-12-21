const {CityRepository} = require('../repository/index');

class CityService{
    constructor(){
        this.cityReposity = new CityRepository();
    }
    async createCity(data){
        try {
            const city = await this.cityReposity.createCity(data)
            return city;
        } catch (error) {
            console.log("something went wrong at service layer");
            throw {error};
        }
    }
    async deletecity(cityID){
        try {
            const response = await this.cityReposity.deleteCity(cityID)
            return response;
        } catch (error) {
            console.log("something went wrong at service layer");
            throw {error};
        }
    }
    async updateCity(cityID, data){
        try {
            const city = await this.cityReposity.updateCity(cityID,data);
            return city;
        } catch (error) {
            console.log("something went wrong at service layer");
            throw {error};
        }
    }
    async getCity(cityID){
        try {
            const city = await this.cityReposity.getCity(cityID)
            return city;
        } catch (error) {
            console.log("something went wrong at service layer");
            throw {error};
        }
    }
    async getAllCities(){
        try {
            const cities = await this.cityReposity.getAllCities();
            return cities;
        } catch (error) {
            console.log("something went wrong at service layer");
            throw {error};
        }
    }
}

module.exports = CityService;