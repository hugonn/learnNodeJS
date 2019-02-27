const yargs = require('yargs');

const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

//Argumentos que serão passados na chamada do app
const argv= yargs
    .options({
        a:{
            demand: true,
            alias: 'address',
            describe: 'endereço geolocalização',
            string: true // certifica que é uma string
        }
    })
    .help()
    .alias('help','h')
    .argv;

// geocode.geocodeAddress(argv.address,(errorMessage,results) => {

//     if(errorMessage)
//         console.log(errorMessage);
//     else
//         console.log(JSON.stringify(results),undefined, 2);
// });


weather.getWeather(37.8267,-122.4233, (errorMessage,weatherResults) => {
    if(errorMessage)
        console.log(errorMessage);
    else{
        console.log(JSON.stringify(weatherResults, undefined, 2));
    }
});