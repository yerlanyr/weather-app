const app = require('express')();

if(!process.env.API_KEY){
    throw Error('No API_KEY provided for api.darksky.net!');
}

const getCitiesSync = () => {
    const fs = require('fs');
    const path = require('path');
    return JSON.parse(fs.readFileSync(path.join(__dirname, './cities.json'), {encoding: 'UTF-8'}).toString());
};

const cities = getCitiesSync();

if(process.env.NODE_ENV === 'development') {
    const getFakeData = () => {
        const fs = require('fs');
        const path = require('path');
        return JSON.parse(fs.readFileSync(path.join(__dirname, './fakeSearchRes.json'), {encoding: 'UTF-8'}).toString());
    };
    
    const fakeData = getFakeData();
    app.get('/api/search', (req, res) => {
        res.send(fakeData);
    });
} else {
    const getWeather = require('./getWeather');
    app.get('/api/search', (req, res) => {
        const q = (req.query.q || '').trim().toLowerCase();
        const filteredCities = cities.filter(x => x.city.toLowerCase().includes(q) || q === '').slice(0,10);
        // fetch weather for cities with no weather property
        Promise.all(filteredCities.filter(x => !x.weather).map(x => new Promise((resolve, reject) => {
            getWeather(x.latitude, x.longitude, resolve);
        }).then(weather => { x.weather = weather; }))).then(() => {
            res.send(filteredCities);
        });
    });
}
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Listening for ${port}`);
});