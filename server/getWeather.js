module.exports = (lat, long, clb) => {
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
};