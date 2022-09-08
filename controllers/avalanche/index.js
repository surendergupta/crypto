const Web3  = require('web3');
const AVAX_RPC_URL_TESTNET = process.env.AVAX_RPC_URL_TESTNET
module.exports.web3Avax = new Web3(new Web3.providers.HttpProvider(AVAX_RPC_URL_TESTNET));