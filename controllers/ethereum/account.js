const Web3  = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider('https://data-seed-prebsc-2-s2.binance.org:8545/'));
module.exports.create_account = async function (req,res) {
    try 
    {
        console.log("*** ETH GET NEW ADDRESS ***");
        let ethData = {};
        // await new ETH walletAddress
        ethData = await web3.eth.accounts.create();
        res.json(ethData);
    }
    catch (error) 
    {
        ethData = error.message
        res.send(ethData);
    }
};