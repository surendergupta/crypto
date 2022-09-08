const Web3  = require('web3');
const MATIC_RPC_URL_TESTNET = process.env.MATIC_RPC_URL_TESTNET
module.exports.webMatic3 = new Web3(new Web3.providers.HttpProvider(MATIC_RPC_URL_TESTNET));