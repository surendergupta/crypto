const express = require('express');
const router = express.Router();
const accountControl = require('../../controllers/avalanche/account.js');
const helperControl = require('../../controllers/avalanche/helper.js');
const withdrawControl = require('../../controllers/avalanche/withdraw.js');
// polygon eth Account Control
router.post('/create-account', accountControl.create_account);
// polygon eth Helper Control
router.post('/convert-towei', helperControl.toWei);

// polygon eth Withdraw Control
router.post('/withdraw-avax', withdrawControl.withdraw_avax);
module.exports = router;