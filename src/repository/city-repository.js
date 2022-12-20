const {City} = require('../models/index');

class CityRepository{

    // async createCity({ name }){
    //     try {
    //         const city = await City.create({ 
    //             name 
    //         });
    //         return city;
    //     } catch (error) {
    //         console.log("something went wrong");
    //         //throw{error};
    //     }
    // }

}

module.exports = {
    CityRepository,
    createCity
}

     async function createCity({ name }){
    try {
        const city = await City.create({ 
            name 
        });
        return city;
    } catch (error) {
        console.log("something went wrong");
        //throw{error};
    }
}