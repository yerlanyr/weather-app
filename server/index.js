const app = require('express')();
// process.env.API_KEY
// process.env.GOOGLE_API_KEY

app.get('/api/weather', (req, res) => {
    
    res.send('hello world');
});
app.get('/api/search', (req, res) => {
    // latitude and longitude
    // 
    res.send('ok');
});
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.listen(4000, () => {
    console.log('Listening for 4000');
});