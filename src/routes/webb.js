// Endpoints for external data
const { Router } = require('express');
const router = new Router();

const fetch = require('node-fetch');

router.get('/', async (req, res) => {
    const response = await fetch('https://api.exchangeratesapi.io/latest');
    const data = await response.json(); // data sacada a sample.json y formateada para mejor visualización
    res.json(data);
});

module.exports = router;