const express = require('express');
const router = express.Router();
const axiosBitcoinControl = require('../../controllers/bitcoin/bitcoin.js');
// Bitcoin Account Control
router.post('/create-account', axiosBitcoinControl.wallet_create);

module.exports = router;