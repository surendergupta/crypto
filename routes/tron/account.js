const express = require('express');
const router = express.Router();
const accountControl = require('../../controllers/tron/account.js');
const addressControl = require('../../controllers/tron/address.js');
const helperControl = require('../../controllers/tron/helper.js');
const withdrawControl = require('../../controllers/tron/withdraw.js');

// account routes
router.post('/create-account', accountControl.create_account);

// address routes
router.post('/tohex', addressControl.base58_to_hex);
router.post('/fromhex', addressControl.hex_to_base58);
router.post('/from-private-key-address', addressControl.privatekey_to_base58);

// helper routes
router.post('/from-decimal-to-hex', helperControl.fromDecimal_to_hex);

// withdraw routes for balance
router.post('/balance-trx', withdrawControl.balance_tron);
router.post('/balance-usdt', withdrawControl.balance_usdt);
router.post('/balance-usdc', withdrawControl.balance_usdc);
router.post('/balance-win', withdrawControl.balance_wink);
router.post('/balance-trendz', withdrawControl.balance_trendz);
router.post('/balance-btt', withdrawControl.balance_btt);

// withdraw routes
router.post('/withdraw-tron', withdrawControl.withdraw_tron);
router.post('/withdraw-usdt', withdrawControl.withdraw_usdt);
router.post('/withdraw-usdc', withdrawControl.withdraw_usdc);
router.post('/withdraw-win', withdrawControl.withdraw_wink);
router.post('/withdraw-trendz', withdrawControl.withdraw_trendz);
router.post('/withdraw-btt', withdrawControl.withdraw_btt);

module.exports = router;