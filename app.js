const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Type your street address i will tell you your location in (Longitude and Latitude)? ', (answer) => {
    const request = require('request');
    const resPromise = require('request-promise');
    let address = answer;
    let api = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}`;
    let options = {
        uri: api,
        json: true
    };
    resPromise(options)
        .then(function (repos) {
            let lng = repos.results[0].geometry.location.lng;
            let lat = repos.results[0].geometry.location.lat;
            console.log('your house is located at longitude of', lng, 'with the latitude of ', lat);
        })
        .catch(function (err) {
            console.log(err);
        });

    rl.close();
});