const express = require('express');
const router = express.Router();
const accountControl = require('../../controllers/ethereum/account.js');
router.post('/create-account', accountControl.create_account);
module.exports = router;