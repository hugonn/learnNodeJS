const request = require('request');

let getWeather = (lat,lng,callback) => {

    request({
        url:`https://api.darksky.net/forecast/3c0ef58d2d6aeead021d44921d498db0/${lat},${lng}`,
        json:true
    }, (error,response,body) => { // <---- callback
        
        if(error)
            callback("error");
        
        else if(response.statusCode === 400){
            callback('Unable to fetch weather');

        }else if(response.statusCode === 200){

            callback(undefined,{
                temperature:body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });    
        }


    });
};

module.exports.getWeather = getWeather;