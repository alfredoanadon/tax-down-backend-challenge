const { Router } = require('express');

const fetch = require('node-fetch');
const router = new Router();

router.get('/test', (req, res) => {
    const data = {
        "rates": {
            "CAD": 1.5393,
            "HKD": 9.1568,
            "ISK": 162.3,
            "PHP": 57.05,
            "DKK": 7.4445,
            "HUF": 357.36,
            "CZK": 26.431,
            "AUD": 1.6237,
            "RON": 4.8667,
            "SEK": 10.2,
            "IDR": 16590.24,
            "INR": 87.6665,
            "BRL": 6.3563,
            "RUB": 90.2297,
            "HRK": 7.5625,
            "JPY": 124.36,
            "THB": 35.825,
            "CHF": 1.0817,
            "SGD": 1.5926,
            "PLN": 4.499,
            "BGN": 1.9558,
            "TRY": 9.7675,
            "CNY": 7.8107,
            "NOK": 10.6618,
            "NZD": 1.7304,
            "ZAR": 18.3507,
            "USD": 1.1808,
            "MXN": 24.1004,
            "ILS": 3.9884,
            "GBP": 0.89183,
            "KRW": 1318.93,
            "MYR": 4.8655
        },
        "base": "EUR",
        "date": "2020-11-10"
    }
    res.json(data);
});  

router.get('/test2', (req, res) => {

const data2= require('../sample.json');
res.json(data2);

});

router.get('/test3', async (req, res) => {

        const response = await fetch('https://api.exchangeratesapi.io/latest');
        const data = await response.json(); // data sacada a sample.json y formateada para mejor visualización
        res.json(data);

    });
    
module.exports = router;