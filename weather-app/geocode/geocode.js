const request = require('request');

let geocodeAddress = (address,callback) => {

    let encodedAddress = encodeURI(address);

    request({
        url:`http://www.mapquestapi.com/geocoding/v1/address?key=lzoYTAurX0xLRSE58ffsV35kJtiqqc9H&location=${encodedAddress}`,
        json : true
    }, (error, response, body) => {
    
        if(error){

            callback("Problema ao conectar nos servers");
    
        } else{
            
            callback(undefined,{
                address : body.results[0].locations[0].street,
                latitude: body.results[0].locations[0].latLng.lat,
                longitude : body.results[0].locations[0].latLng.lng
            });
        }
    });

};

module.exports.geocodeAddress = geocodeAddress;