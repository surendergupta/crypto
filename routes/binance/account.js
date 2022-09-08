const express = require('express');
const router = express.Router();
const accountControl = require('../../controllers/binance/account.js');
const helperControl = require('../../controllers/binance/helper.js');
const withdrawControl = require('../../controllers/binance/withdraw.js');

// Binance eth Account Control
router.post('/create-account', accountControl.create_account);
// Binance eth Helper Control
router.post('/convert-towei', helperControl.toWei);
// Binance BNB and BEP20 TOKEN Withdraw Control
router.post('/withdraw-bnb', withdrawControl.withdraw_bnb);
router.post('/withdraw-busd', withdrawControl.withdraw_busd_bep20);

router.post('/withdraw-eth', withdrawControl.withdraw_eth_bep20);
router.post('/withdraw-usdt', withdrawControl.withdraw_usdt_bep20);
router.post('/withdraw-usdc', withdrawControl.withdraw_usdc_bep20);
router.post('/withdraw-doge', withdrawControl.withdraw_doge_bep20);
router.post('/withdraw-shib', withdrawControl.withdraw_shib_bep20);
router.post('/withdraw-trx', withdrawControl.withdraw_trx_bep20);
router.post('/withdraw-avax', withdrawControl.withdraw_avax_bep20);
router.post('/withdraw-etc', withdrawControl.withdraw_etc_bep20);
router.post('/withdraw-ltc', withdrawControl.withdraw_ltc_bep20);


module.exports = router;