const Web3  = require('web3');
const BNB_RPC_URL_TESTNET = process.env.BNB_RPC_URL_TESTNET
module.exports.webBnb3 = new Web3(new Web3.providers.HttpProvider(BNB_RPC_URL_TESTNET));