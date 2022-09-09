const express = require('express');
const router = express.Router();

const priceControl = require('../../controllers/price/price.js');
router.get('/price-usd', priceControl.price_list_usd);
router.get('/price-trx', priceControl.price_list_trx);

module.exports = router;