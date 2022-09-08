const Web3  = require('web3');
const ETH_RPC_URL_TESTNET = process.env.ETH_RPC_URL_TESTNET
module.exports.webEth3 = new Web3(new Web3.providers.HttpProvider(ETH_RPC_URL_TESTNET));