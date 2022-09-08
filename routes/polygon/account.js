const express = require('express');
const router = express.Router();
const accountControl = require('../../controllers/polygon/account.js');
const helperControl = require('../../controllers/polygon/helper.js');
const withdrawControl = require('../../controllers/polygon/withdraw.js');
// polygon eth Account Control
router.post('/create-account', accountControl.create_account);
// polygon eth Helper Control
router.post('/convert-towei', helperControl.toWei);

// polygon eth Withdraw Control
router.post('/withdraw-matic', withdrawControl.withdraw_matic);
module.exports = router;