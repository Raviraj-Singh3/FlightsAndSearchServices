const express = require('express')
const bodyParser = require('body-parser')
const {PORT} = require('./config/serverConfig');
const {City} = require('./models/index');
const CityRepository = require('./repository/city-repository');

const setupAndStartServer = async()=>{

    const app = express();
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());

    app.listen(PORT, async()=>{
        console.log("server started at- ",PORT);
        console.log(City);
        // const repo = new CityRepository();
        // repo.createCity( "mumbai");
        CityRepository.createCity({name: "hello"});
        
        // await City.create({
        //     name: "Lucknkow"
        // })
});
}
setupAndStartServer();