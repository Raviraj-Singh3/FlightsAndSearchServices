const {City} = require('../models/index');
const { Op } = require('sequelize');

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
            // the below approach also works but will not return updated object
            // if we are using Pgsql then returning: true can be used, else not
            // const city = await City.update(data, {
            //     where: {
            //         id: cityID
            //     }
            // })
            // return city;
            //for getting updated data in mysql we use the bellow approach
            const city = await City.findByPk(cityID);
            city.name = data.name;
            await city.save();
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
    async getAllCities(filter){ // filter can be empty also
        try {
            
            if(filter.name){
                const cities = await City.findAll({
                    where: {
                        name: {
                            [Op.startsWith]: filter.name
                        }
                    }
                })
                return cities;
            }
            const cities = await City.findAll();
            return cities;
            
        } catch (error) {
            console.log("something went wrong in the repository layer");
            throw{error};
        }
    }

    async createMany(data){
        try {
            const cities = await City.bulkCreate([data]);
            return cities;
        } catch (error) {
            console.log("something went wrong in repo");
            throw error
        }
    }

}

module.exports = CityRepository;