const app = require('express')();

if(!process.env.API_KEY){
    throw Error('No API_KEY provided for api.darksky.net!');
}

const getWeather = (lat, long, clb) => {
    const url = `https://api.darksky.net/forecast/${process.env.API_KEY}/${lat},${long}?exclude=[minutely,hourly,alerts,flags]&units=si`;
    const https = require('https');
    https.get(url, (res) => {
        let error;
        if (res.statusCode !== 200) {
          error = new Error('Request Failed.\n' +
                            `Status Code: ${res.statusCode}`);
        }
        if (error) {
          console.error(error.message);
          // consume response data to free up memory
          res.resume();
          clb();
          return;
        }
        res.setEncoding('utf8');
        let rawData = '';
        res.on('data', (chunk) => { rawData += chunk; });
        res.on('end', () => {
            try {
                const parsedData = JSON.parse(rawData);
                clb(parsedData);
            } catch (e) {
                console.error(e.message);
            }
        });
    })
}

const getCitiesSync = () => {
    const fs = require('fs');
    const path = require('path');
    return JSON.parse(fs.readFileSync(path.join(__dirname, './cities.json'), {encoding: 'UTF-8'}).toString());
};

const cities = getCitiesSync();

app.get('/api/weather', (req, res) => {
    const cityName = req.query.city;
    const city = cities.find(x => x.city === cityName);
    if(!city){
        res.sendStatus(404);
        return;
    }
    if(city.weather) {
        res.send(city.weather);
        return;
    }
    getWeather(city.latitude, city.longitude, (weather) => {
        res.send(city.weather = weather);
    });
    return;
});
app.get('/api/search', (req, res) => {
    const q = (req.query.q || '').trim().toLowerCase();
    const filteredCities = cities.filter(x => x.city.toLowerCase().includes(q) || q === '').slice(0,10);
    // check if this cities does not have weather key download and add the keys.
    Promise.all(filteredCities.filter(x => !x.weather).map(x => new Promise((resolve, reject) => {
        getWeather(x.latitude, x.longitude, resolve);
    }).then(weather => { x.weather = weather; }))).then(() => {
        res.send(filteredCities);
    });
});

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.listen(4000, () => {
    console.log('Listening for 4000');
});