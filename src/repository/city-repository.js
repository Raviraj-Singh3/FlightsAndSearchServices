const {City} = require('../models/index');

class CityRepository{

    async createCity({ name }){
        try {
            const city = await City.create({ 
                name 
            });
            return city;
        } catch (error) {
            console.log("something went wrong in the repository layer");
            throw{error};
        }
    }

    async deleteCity(cityID){
        try {
            await City.destroy({
                where: {
                    id: cityID
                }
            })
            return true;
            
        } catch (error) {
            console.log("something went wrong in the repository layer");
            throw{error};
        }
    }

    async updateCity(cityID, data){
        try {
            const city = await City.update(data, {
                where: {
                    id: cityID
                }
            })
            return city;
            
        } catch (error) {
            console.log("something went wrong in the repository layer");
            throw{error};
        }
    }

    async getCity(cityID){
        try {
            const city = await City.findByPk(cityID)
            return city;
            
        } catch (error) {
            console.log("something went wrong in the repository layer");
            throw{error};
        }
    }

}

module.exports = CityRepository;