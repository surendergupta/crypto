const express = require('express');
const router = express.Router();
const accountControl = require('../../controllers/ethereum/account.js');
const helperControl = require('../../controllers/ethereum/helper.js');
const withdrawControl = require('../../controllers/ethereum/withdraw.js');
// Ethereum eth Account Control
router.post('/create-account', accountControl.create_account);
// Ethereum eth Helper Control
router.post('/convert-towei', helperControl.toWei);

// Ethereum eth and ERC20 Token Withdraw Control
router.post('/withdraw-eth', withdrawControl.withdraw_eth);
// router.post('/withdraw-usdt', withdrawControl.withdraw_usdt_erc20);
module.exports = router;